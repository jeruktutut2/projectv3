import { type ErrorMessage } from "../helpers/response-helper";

export class ResponseException extends Error {
    constructor(public status: number, public errorMessages: ErrorMessage[], public override message: string) {
        super(message)
    }
}