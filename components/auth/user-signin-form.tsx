"use client";

import * as React from "react";
import * as z from "zod";
import toast from "react-hot-toast";
import { Icons } from "@/components/icons";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { userSignInSchema } from "@/lib/validations/auth";
import { postRequest } from "@/lib/networkHelper";
import { Urls } from "@/lib/apiConstants";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteToken,
  saveToken,
} from "@/lib/redux/store/reducers/saveTokenReducer";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type userSignInSchema = z.infer<typeof userSignInSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (data: userSignInSchema) => {
      return postRequest(Urls.login, data);
    },
    onSuccess: (data) => {
      console.log(data, "returned data");
      localStorage.setItem("token", data.data.Authorization);
      dispatch(saveToken(data.data.Authorization));
      router.push("/");
    },

    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return toast(error.response?.data.message);
      }
      if (error instanceof ZodError) {
        console.log(error.flatten(), "error");
        return toast("Please valid data");
      }
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    try {
      const data = {
        email: (event.target as HTMLFormElement).email.value,
        password: (event.target as HTMLFormElement).password.value,
      };

      if (!data.email || !data.password) {
        toast("Please enter all the fields");
        return;
      }

      const isValidData = userSignInSchema.parse(data);
      mutation.mutate(isValidData);
    } catch (error: any) {
      console.log(error);
      // console.log((error as ZodError).format())
      // error.flatten().formErrors.length > 0 && toast(error.flatten().formErrors[0])
    }
  };

  return (
    // <div className={cn("grid gap-6 mt-10", className)} {...props}>
    <div className="grid gap-6">
      <form onSubmit={handleSubmit}>
        <h5 className="text-orange-593500 text-sm font-medium">
          Sign in to your account
        </h5>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <input
              id="email"
              placeholder="name@example.com"
              className="bg-transparent text-734400 my-1 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              name="email"
            />
          </div>
          <div className="grid gap-1">
            <input
              id="password"
              placeholder="Enter password"
              className="bg-transparent text-734400 my-0 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              name="password"
            />
            <div className="text-sm text-orange-593500 justify-self-end font-medium">
              forgot password
            </div>
          </div>

          <button className="my-0 mx-auto w-2/5 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500">
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
