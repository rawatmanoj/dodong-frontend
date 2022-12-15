"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import toast from "@/ui/toast"
import { Icons } from "@/components/icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postRequest } from "@/lib/networkHelper"
import { Urls } from "@/lib/apiConstants"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

    const mutation = useMutation({
        mutationFn: data => {
        return postRequest(Urls.signup,data)
        }
      })

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams();

  async function handleSubmit(event:any) {
    // setIsLoading(true)
    event.preventDefault();
    // console.log(event.target[0].value);
    console.log(event.target[0].value);

    


  }

  return (
    // <div className={cn("grid gap-6 mt-10", className)} {...props}>
    <div className="grid gap-6">
      <form 
    //   onSubmit={(e)=>{
    //     e.preventDefault();
    //     console.log(e,"dataa")

    //   }}
    onSubmit={e=>handleSubmit(e)}
      >
        <h5 className='text-orange-593500 font-normal text-sm font-medium'>Sign up</h5>
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
              disabled={isLoading}
              //{...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <div className="grid gap-1">
           
            <input
              id="email"
              placeholder="Enter password"
              className="bg-transparent text-734400 my-0 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              name="password"
              disabled={isLoading}
              //{...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
          <div className="grid gap-1">
           
            <input
              id="confirmpassword"
              placeholder="Enter confirm password"
              className="bg-transparent text-734400 my-0 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              name="confirmpassword"
              disabled={isLoading}
              //{...register("email")}
            />
            {/* {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )} */}
          </div>
         
          <button
            className="my-0 mx-auto w-2/5 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </button>
        </div>
      </form>
     
    </div>
  )
}
