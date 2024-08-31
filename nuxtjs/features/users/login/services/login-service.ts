import { type PoolConnection } from "mysql2/promise";
import { Validation } from "~/commons/validations/validation";
import { LoginValidationSchema } from "../validation-schemas/login-validation-schema";
import type { LoginRequest } from "../models/login-request";
import { MysqlUtil } from "~/commons/utils/mysql-util";
import { UserRepository } from "../repositories/user-repository";
import { ResponseException } from "~/commons/exceptions/response-exception";
import { setErrorMessages } from "~/commons/helpers/response-helper";
import bcrypt from "bcrypt";
import { setDataMessageResponse } from "~/helpers/response-helper";
import { errorHandler } from "~/commons/exceptions/error-exception";

export class LoginService {
    static async login(loginRequest: LoginRequest) {
        let poolConnection: PoolConnection | null = null
        try{
            Validation.validate(LoginValidationSchema.LOGIN, loginRequest)

            await MysqlUtil.getInstance()
            poolConnection = await MysqlUtil.getPool().getConnection()

            const [rows] = await UserRepository.findByEmail(poolConnection, loginRequest.email)
            if (rows.length < 1) {
                const errorMessage = "wrong username or password"
                throw new ResponseException(400, setErrorMessages(errorMessage), errorMessage)
            }

            const match = await bcrypt.compare(loginRequest.password, rows[0].password)
            if (!match) {
                const errorMessage = "wrong username or password"
                throw new ResponseException(400, setErrorMessages(errorMessage), errorMessage)
            }

            return setDataMessageResponse("successfully login")
        } catch(e) {
            return errorHandler(e)
        } finally {
            if (poolConnection) {
                poolConnection.release()
            }
        }
    }
}