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
import LibraryIcon from "../../../public/library.svg";
import { signUp } from "../auth/auth";

export function SignUpForm() {
  const [state, action] = useFormState(signUp, undefined);

  return (
    <Card className="max-w-sm">
      <CardHeader className="items-center">
        <LibraryIcon width={50} height={50} />
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Welcome! Please fill in the details to get started.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action} className="space-y-6">
          {state?.message && (
            <p className="text-sm text-red-500 font-medium">{state.message}</p>
          )}
          <div className="flex space-x-2">
            <div className="space-y-2">
              <Label>First name</Label>
              <Input placeholder="John" name="firstName" type="text" />
              {state?.errors?.firstName && (
                <p className="text-sm text-red-500">{state.errors.firstName}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label>Last name</Label>
              <Input placeholder="Doe" name="lastName" type="text" />
              {state?.errors?.lastName && (
                <p className="text-sm text-red-500">{state.errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label>Email address</Label>
            <Input
              placeholder="john.doe@email.com"
              type="email"
              name="email"
              startIcon={Mail}
            />
            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              startIcon={Lock}
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500">{state.errors.password}</p>
            )}
          </div>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center">
        <CardDescription>
          Already have an account?{" "}
          <Link href={"/login"} className="text-primary font-medium">
            Sign in
          </Link>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
