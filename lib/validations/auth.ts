import * as z from "zod"

export const userSignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const personalProfileSchema = z.object({
  occupation: z.string().optional(),
  company: z.string().optional(),
  jobLocation: z.string().optional(),
  phoneNumber: z.string().optional(),
  brandDetails: z.string().optional(),
  other: z.string().optional(),
})

export const userSignUpSchema = z.object({
  email: z.string({required_error: "Email is required",}).email(),
  password: z.string(),
  confirmPassword: z.string(),
  isPhoneNumberConfirmed:z.boolean(),
  isEmailConfirmed:z.boolean()
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match"
    });
  }
});
