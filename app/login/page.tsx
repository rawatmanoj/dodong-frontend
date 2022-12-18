import React from "react";
import Image from "next/image";
import dodonglogo from "../../public/images/common/dodong-logo.svg";
import { UserAuthForm } from "@/components/auth/user-signin-form";
import { Icons } from "@/components/icons";
import Link from "next/link";

export default function Login() {
  return (
    <section className="bg-neutral-100 h-screen flex justify-center flex-col items-center">
      <figure className="mb-10">
        <Image
          src={dodonglogo}
          alt="Picture of the author"
          width={307}
          height={307}
        />
      </figure>
      <header className="flex flex-col items-center mb-10">
        <h3 className="text-734400 font-bold">Welcome to DODONG</h3>
        <h4 className="font-normal italic text-orange-CC7A00">
          Go online Do dong
        </h4>
      </header>
      <main className="w-80 flex flex-col">
        <UserAuthForm />
        <div className="relative mt-10 mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 text-slate-500">Or login with</span>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="w-3/12 inline-flex w-full items-center justify-center rounded-full border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
            //onClick={() => signIn("github")}
            //disabled={isLoading}
          >
            <Icons.google size={30} />
          </button>
          <button
            type="button"
            className="w-3/12 inline-flex w-full items-center justify-center rounded-full border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
            //onClick={() => signIn("github")}
            //disabled={isLoading}
          >
            <Icons.fb size={30} />
          </button>
          <button
            type="button"
            className="w-3/12 inline-flex w-full items-center justify-center rounded-full border bg-white px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
            //onClick={() => signIn("github")}
            //disabled={isLoading}
          >
            <Icons.twitter size={30} />
          </button>
        </div>
        <div className="mt-20 place-self-center">
          <div className="text-sm text-orange-593500 justify-self-end font-medium">
            New to DODONG?
            <Link href="/signup">
              <span className="ml-2 text-orange-CC7A00 underline-offset-1">
                SIGN UP
              </span>
            </Link>{" "}
          </div>
        </div>
      </main>
    </section>
  );
}
