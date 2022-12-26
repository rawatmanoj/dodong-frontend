"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import {  userSignUpSchema } from "@/lib/validations/auth"
// import {toast} from "@/ui/toast"
import { Icons } from "@/components/icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postRequest } from "@/lib/networkHelper"
import { Urls } from "@/lib/apiConstants"
import { ZodError } from "zod";
import axios from "axios";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type userSignUpSchema = z.infer<typeof userSignUpSchema>;
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const router = useRouter()
    const mutation = useMutation({
        mutationFn: (data:userSignUpSchema) => {
            return postRequest(Urls.signup,data);
        },
        onSuccess:(data)=>{
            console.log(data,"returned data");
            // toast('Here is your toast.')
            router.push('/login')
    },

    onError:(error:any)=>{
        if(axios.isAxiosError(error)){
            console.log(error)
            return toast(error.response?.data.message)
        }
        if(error instanceof ZodError){
            console.log(error.flatten(),"error")
            return toast("Please valid data")
        }
    }
      })
    
      const handleSubmit = (event:React.FormEvent<HTMLFormElement>):any => {
        event.preventDefault();
    try {
        const data = {
            email:(event.target as HTMLFormElement).email.value,
            password:(event.target as HTMLFormElement).password.value,
            confirmPassword:(event.target as HTMLFormElement).confirmPassword.value,
            isPhoneNumberConfirmed:false,
            isEmailConfirmed:false
        }

        if(!data.email || !data.password || !data.confirmPassword){
        toast('Please enter all the fields');
        return
        }        

        const isValidData = userSignUpSchema.parse(data);
        mutation.mutate(isValidData);
        
    } catch (error:any) {
        console.log((error as ZodError).format())
        error.flatten().formErrors.length > 0 && toast(error.flatten().formErrors[0])
    }
       
       }

  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams();


  return (
    <div className="grid gap-6">
      <form 
       onSubmit={handleSubmit}
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
            />
          </div>
          <div className="grid gap-1">
           
            <input
              id="password"
              placeholder="Enter password"
              className="bg-transparent text-734400 my-0 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              name="password"
              disabled={isLoading}
              
            />
          </div>
          <div className="grid gap-1">
           
            <input
              id="confirmPassword"
              placeholder="Enter confirm password"
              className="bg-transparent text-734400 my-0 mb-2 block h-9 w-full rounded-md border border-734400 py-2 px-3 text-sm placeholder:text-734400 hover:border-734400 focus:border-734400 focus:outline-none"
              type="password"
              autoCapitalize="none"
              autoComplete="none"
              autoCorrect="off"
              name="confirmPassword"
              disabled={isLoading}        
            />
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
