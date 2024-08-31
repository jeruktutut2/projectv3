import { PoolConnection } from "mysql2/promise";
import { LoginRequest } from "../../../features/users/login/models/login-request";
import { LoginService } from "~/features/users/login/services/login-service";
import { errorHandlerResponse } from "~/commons/exceptions/error-exception";

export default defineEventHandler(async (event) => {
    try {
        const requestBody = await readBody(event)
        const loginRequest: LoginRequest = {
            email: requestBody.email,
            password: requestBody.password
        }

        const loginResponse = await LoginService.login(loginRequest)
        return loginResponse
    } catch(e) {
        return errorHandlerResponse(e)
    }
})