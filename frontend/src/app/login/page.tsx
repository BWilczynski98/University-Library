"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { LoginForm } from "./form";

const loginFormSchema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .min(2, { message: "Password must be at least 2 characters" }),
});

type LoginFormType = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const router = useRouter();
  const form = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginFormType) {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/auth/login",
      headers: { "Content-Type": "multipart/formdata" },
      data: formData,
    })
      .then((res) => {
        if (res.status == 200) {
          router.push("/dashboard");
        }
      })
      .catch((e: Error | AxiosError) => {
        console.log(e.message);
      });
  }

  return (
    <main className="min-h-screen flex justify-center items-center">
      <LoginForm />
    </main>
  );
}
