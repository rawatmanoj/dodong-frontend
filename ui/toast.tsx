"use client"

import * as React from "react"
import hotToast, { Toaster as HotToaster } from "react-hot-toast"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export const Toaster = HotToaster

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  type:"error" | "success" | "default"
}

export function Toast({ visible, className,type, ...props }: ToastProps) {
  console.log(className,type,"clasnamew")
  return (
    <div
      style={{padding:"8px"}}
      className={cn(
        "min-h-16 flex w-[350px] flex-col items-start bg-black-500  rounded-md shadow-lg",
        visible && "animate-in slide-in-from-bottom-5 ",
        type==="success" && "text-black bg-red-500",
      )}
      {...props}
    />
  )
}

interface ToastIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons
}

Toast.Icon = function ToastIcon({ name, className, ...props }: ToastIconProps) {
  const Icon = Icons[name]

  if (!Icon) {
    return null
  }

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
      <Icon className={cn("h-10 w-10", className)} {...props} />
    </div>
  )
}

interface ToastTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Toast.Title = function ToastTitle({ className, ...props }: ToastTitleProps) {
  return <p className={cn("text-sm font-medium", className)} {...props} />
}

interface ToastDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Toast.Description = function ToastDescription({
  className,
  ...props
}: ToastDescriptionProps) {
  return <p className={cn("text-sm opacity-80", className)} {...props} />
}

interface ToastOpts {
  title?: string
  message: string
  type?: "success" | "error" | "default"
  duration?: number
}

export function toast(opts: ToastOpts) {
  const { title, message, type = "default", duration = 900000 } = opts;

  console.log(title,"title")

  return hotToast.custom(
    ({ visible }) => (
      <Toast
        visible={visible}
        className={cn({
          // "bg-red-500 text-white": type === "error",
          // "bg-neutral-900 text-white": type === "success",
        })}
        type={type}
      >
        <Toast.Title>{title}</Toast.Title>
        {message && <Toast.Description>{message}</Toast.Description>}
      </Toast>
    ),
    { duration }
  )
}
