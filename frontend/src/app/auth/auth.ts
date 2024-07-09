"use server";
import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  LoginFormSchema,
  LoginFormState,
  SignUpFormSchema,
  SignUpFormState,
} from "./definitions";

export async function signUp(
  state: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> {
  const validatedFields = SignUpFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await axios
    .post("http://127.0.0.1:8000/auth/registration", {
      ...validatedFields.data,
      first_name: validatedFields.data.firstName,
      last_name: validatedFields.data.lastName,
    })
    .then((res) => {
      return res;
    })
    .catch((e: Error | AxiosError) => {
      return e.message;
    });
}

export async function login(
  state: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await axios({
    method: "post",
    url: "http://127.0.0.1:8000/auth/login",
    headers: { "Content-Type": "multipart/formdata" },
    data: formData,
  })
    .then((res) => {
      cookies().set("accessToken", res.data.access_token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        sameSite: "strict",
      });
      return res;
    })
    .catch((e: Error | AxiosError) => {
      console.log(e.message);
      return e;
    });

  redirect("/dashboard");
}

export async function logout() {
  cookies().delete("accessToken");
  redirect("/login");
}
