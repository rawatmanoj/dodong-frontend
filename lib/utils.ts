import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const getToken = ()=>{
   return localStorage.getItem("token")
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
