import * as z from "zod"

const messages={
  required:"required"
}

export const userSignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const personalProfileSchema = z.object({
  occupation: z.string().min(1, { message: messages.required }),
  userId:z.number().min(1, { message: messages.required }),
  aboutMe: z.string().min(1, { message: messages.required }),
  name: z.string().min(1, { message: messages.required }),
  displayName: z.string().min(1, { message: messages.required }),
  dob: z.date(),
  idDetails: z.string().optional(),
  facebookURL: z.string().optional(),
  linkedInURL: z.string().optional(),
  twitterHandle:z.string().optional(),
})

export const professionalProfileSchema = z.object({
  occupation: z.string().min(1, { message: messages.required }),
  company: z.string().min(1, { message: messages.required }),
  jobLocation: z.string().min(1, { message: messages.required }),
  phoneNumber: z.string().min(1, { message: messages.required }),
  brandDetails: z.string().min(1, { message: messages.required }),
  other: z.string().min(1, { message: messages.required }),
  userId:z.number().min(1, { message: messages.required })
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
