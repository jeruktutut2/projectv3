import { z, ZodType } from "zod";

export class LoginValidationSchema {
    static readonly LOGIN: ZodType = z.object({
        email: z.string({required_error: 'email is required'}).min(1, { message: "This field has to be filled." }).max(255).email("This is not a valid email."),
        password: z.string({required_error: 'password is required'}).min(1, { message: "This field has to be filled." }).max(255)
    })
}