"use server"

import { Response, setDataMessageResponse, setErrorMessages, setInternalServerErrorMessageResponse } from "@/commons/helpers/response-helper";
import { Validation } from "../../../../commons/validations/validation";
import { LoginValidationSchema } from "../validation-schemas/login-validation-schema";
import { LoginRequest } from "../models/login-request";
import { ResponseException } from "@/commons/exceptions/response-exception";
import { errorHandler } from "@/commons/exceptions/error-exception";
import { MysqlUtil } from "@/commons/utils/mysql-util";
import { PoolConnection } from "mysql2/promise";
import { UserRepository } from "../repositories/user_repository";
import bcrypt from "bcrypt";

// Only async functions are allowed to be exported in a "use server" file.
// cannot use class and method eventhough it is a async method
export async function login(previousState: any, formData: FormData) {
    let poolConnection: PoolConnection | null = null
    try {
        const loginRequest: LoginRequest = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

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
    } catch(e: unknown) {
        return errorHandler(e)
    } finally {
        if (poolConnection) {
            poolConnection.release()
        }
    }
}