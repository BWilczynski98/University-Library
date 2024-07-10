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

  try {
    const res = await axios.post("http://127.0.0.1:8000/auth/registration", {
      ...validatedFields.data,
      first_name: validatedFields.data.firstName,
      last_name: validatedFields.data.lastName,
    });
  } catch (error: any) {
    if (error.response && error.response.status > 400) {
      return { message: "Something went wrong, try again in a little while." };
    }
  }

  redirect("/login");
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

  try {
    const res = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/login",
      headers: { "Content-Type": "multipart/formdata" },
      data: formData,
    });
    cookies().set("accessToken", res.data.access_token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60,
      sameSite: "strict",
    });
  } catch (error: any) {
    if (error.response && error.response.status == 401) {
      return { message: "The email address or password is incorrect." };
    } else {
      return { message: "Something went wrong, try again in a little while." };
    }
  }

  redirect("/dashboard");
}

export async function logout() {
  cookies().delete("accessToken");
  redirect("/login");
}
