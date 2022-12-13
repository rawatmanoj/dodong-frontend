import React from 'react'
import Image from 'next/image';
import sharePhotos from "@/images/profile/sharePhotos.svg"
import inviteFriends from "@/images/profile/inviteFriends.svg"
import completeYourProfile from "@/images/profile/completeYourProfile.svg"
import squareProfile from "@/images/profile/square-profile.svg"
import fiftypercentage from "@/images/profile/50percentage.svg"
import { Roboto } from '@next/font/google';
const roboto = Roboto({weight:'500'})
export default function Step1() {
  return (
    <section className={`w-full h-screen bg-profile-back flex flex-col  items-center ${roboto.className}`}>
        <header className='flex flex-row justify-center items-center w-full mt-20'>
        {/* <figure className='bg-red-500'> */}
            <Image  
             src={squareProfile}
             alt="Picture of the author"
             width={40} 
             height={40}
             className="rounded bg-red-100 bg-auto"
            />
        {/* </figure> */}
         <h3 className='mr-10 ml-10 font-medium'>Invite your friends to grow your network to follow your account. You can also connect with them to
let them add you to their network.</h3>  
         {/* <button 
          className="w-1/12 inline-flex  items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
         >
            Save
         </button>   */}
         <Image
         src={fiftypercentage}
         alt="Picture of the author"
         width={40} 
         height={40}
         className="rounded bg-red-100 bg-auto"
         />
        </header>
        
        <main className={`mt-10 flex flex-col justify-center items-center  w-2/5 `}>
        <div className='w-6/12'>
                <div className='w-full flex flex-row  items-center mt-10'>
                  <Image 
                   className='mr-5'
                   src={completeYourProfile}
                   alt="Picture of the author"
                   width={49} 
                   height={49}
                  />
                  <h4 className='font-bold text-2xl text-orange-593500'>Follow Connects</h4>
                </div>
                <div className='w-full flex flex-row  items-center mt-10'>
                  <Image 
                   className='mr-5'
                   src={inviteFriends}
                   alt="Picture of the author"
                   width={49} 
                   height={49}
                  />
                  <h4 className='font-bold text-2xl text-orange-593500'>Invite friends by whatsapp</h4>
                </div>
                <div className='w-full flex flex-row  items-center mt-10'>
                  <Image 
                   className='mr-5'
                   src={sharePhotos}
                   alt="Picture of the author"
                   width={49} 
                   height={49}
                  />
                  <h4 className='font-bold text-2xl text-orange-593500'>Invite friends by email</h4>
                </div>
                <div className='w-full flex flex-row  items-center mt-10'>
                  <Image 
                   className='mr-5'
                   src={sharePhotos}
                   alt="Picture of the author"
                   width={49} 
                   height={49}
                  />
                  <h4 className='font-bold text-2xl text-orange-593500'>Invite friends by sms</h4>
                </div>
                <div className='w-full flex flex-row  items-center mt-10'>
                  <Image 
                   className='mr-5'
                   src={sharePhotos}
                   alt="Picture of the author"
                   width={49} 
                   height={49}
                  />
                  <h4 className='font-bold text-2xl text-orange-593500'>Invite friends by...</h4>
                </div>
              
            </div>
        </main>
    </section>
  )
}
