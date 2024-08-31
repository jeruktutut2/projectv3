import { setErrorMessagesResponse, setInternalServerErrorMessageResponse } from "../helpers/response-helper";
import { ResponseException } from "./response-exception";

export function errorHandler(error: unknown) {
    if (error instanceof ResponseException) {
        console.log(JSON.stringify({logTime: (new Date()).toISOString(), app: "projectv3-nextjs", error: error.stack}));
        return setErrorMessagesResponse(error.errorMessages)
    } else if (error instanceof Error) {
        console.log(JSON.stringify({logTime: (new Date()).toISOString(), app: "projectv3-nextjs", error: error.stack}));
        return setInternalServerErrorMessageResponse()
    } else {
        return setInternalServerErrorMessageResponse()
    }
}