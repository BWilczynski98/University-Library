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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import LoginIcon from "../../../public/login.svg";
import { login } from "../auth/auth";

export function LoginForm() {
  const [state, action] = useFormState(login, undefined);
  return (
    <Card className="max-w-sm">
      <CardHeader className="items-center">
        <span className="pb-2">
          <LoginIcon width={50} height={50} />
        </span>

        <CardTitle>Sign in to University Library</CardTitle>
        <CardDescription>
          Welcome back! Please sign in to continue
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className="space-y-6">
          <div className="space-y-2">
            <Label>Email address</Label>
            <Input
              placeholder="john.doe@email.com"
              type="email"
              name="username"
              startIcon={Mail}
            />
            {state?.errors?.username && (
              <p className="text-sm text-red-500">{state.errors.username}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              placeholder="Your password"
              type="password"
              name="password"
              startIcon={Lock}
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500">{state.errors.password}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <CardDescription>
          Don&apos;t have an account?&nbsp;
          <Link href="/signup" className="text-primary font-medium">
            Sign up
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
