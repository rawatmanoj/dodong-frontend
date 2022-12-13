import React from 'react'
import Image from 'next/image';
import dodonglogo from "../../public/images/common/dodong-logo.svg";
import { UserAuthForm } from '@/components/user-auth-form';
export default function Login() {
  return (
    <section className='bg-neutral-100 h-screen flex justify-center flex-col items-center'>

          <figure>
            <Image
                src={dodonglogo}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
            />
            
            </figure>
        <header className='flex '>
          <h3 className='text-734400 font-bold'>Welcome to DODONG</h3>
            <div className=''>Go online Do dong</div>
        </header>
        <main className='w-2/12 '>
          {/* <Icons.spinner /> */}
          <UserAuthForm />
        </main>
    </section>
  )
}