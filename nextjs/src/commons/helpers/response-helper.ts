export interface Response {
    data: any
    errors: any
}

export function setResponse(data: any, errors: any): Response {
    return {
        data: data,
        errors: errors
    }
}

export function setDataMessageResponse(message: string): Response {
    return {
        data: {
            field: "message",
            message: message
        },
        errors: null
    }
}

export interface ErrorMessage {
    field: string
    message: string
}

export function setErrorMessages(message: string): ErrorMessage[] {
    return [{
        field: "message",
        message: message
    }]
}

export function setErrorMessagesResponse(errorMessages: ErrorMessage[]): Response {
    return {
        data: null,
        errors: errorMessages
    }
}

export function setInternalServerErrorMessageResponse(): Response {
    const errorMessages: ErrorMessage[] = [
        {
            field: "message",
            message: "internal server error"
        }
    ]
    return {
        data: null,
        errors: errorMessages
    }
}