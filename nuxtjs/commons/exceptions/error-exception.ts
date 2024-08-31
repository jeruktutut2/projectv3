import { setErrorMessagesResponse, setInternalServerErrorMessage, setInternalServerErrorMessageResponse } from "~/helpers/response-helper";
import { ResponseException } from "./response-exception";

export function errorHandler(error: unknown) {
    if (error instanceof ResponseException) {
        console.log(JSON.stringify({logTime: (new Date()).toISOString(), app: "projectv3", error: error.stack}));
        throw new ResponseException(error.status, error.errorMessages, error.message)
    } else if (error instanceof Error) {
        console.log(JSON.stringify({logTime: (new Date()).toISOString(), app: "projectv3", error: error.stack}));
        throw new ResponseException(500, setInternalServerErrorMessage(), "internal server error")
    } else {
        throw new ResponseException(500, setInternalServerErrorMessage(), "internal server error")
    }
}

export function errorHandlerResponse(error: unknown) {
    if (error instanceof ResponseException) {
        return setErrorMessagesResponse(error.errorMessages)
    } else if (error instanceof Error) {
        return setInternalServerErrorMessageResponse()
    } else {
        return setInternalServerErrorMessageResponse()
    }
}