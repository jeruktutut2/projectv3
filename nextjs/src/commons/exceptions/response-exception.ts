import { ErrorMessage } from "../../commons/helpers/response-helper";

export class ResponseException extends Error {
    constructor(public status: number, public errorMessages: ErrorMessage[], public message: string) {
        super(message)
    }
}