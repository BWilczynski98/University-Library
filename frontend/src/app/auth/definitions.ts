import { z } from "zod";

const REGEX_DICT = {
  ONLY_LETTERS: /^[A-Za-z]+$/,
};

export const SignUpFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name field must not be empty" })
    .regex(REGEX_DICT.ONLY_LETTERS, {
      message:
        "First name must not contain characters such as: digits, special characters, white spaces",
    }),
  lastName: z
    .string()
    .min(1, { message: "Last name field must not be empty" })
    .regex(REGEX_DICT.ONLY_LETTERS, {
      message:
        "Last name must not contain characters such as: digits, special characters, white spaces",
    }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty" }),
});

export const LoginFormSchema = z.object({
  username: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password field must not be empty" }),
});

export type SignUpFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginFormState =
  | {
      errors?: { username?: string[]; password?: string[] };
      message?: string;
    }
  | undefined;
