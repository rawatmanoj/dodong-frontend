import React from 'react'
import Image from 'next/image';
import sharePhotos from "@/images/profile/sharePhotos.svg"
import inviteFriends from "@/images/profile/inviteFriends.svg"
import completeYourProfile from "@/images/profile/completeYourProfile.svg"
import squareProfile from "@/images/profile/square-profile.svg"
import media from "@/images/profile/media.svg"
import playvideo from "@/images/profile/playvideo.svg"
import post from "@/images/profile/post.svg"
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
        
        <main className={`mt-10 flex flex-col justify-center items-center w-3/5 h-full`}>
            <div className='border-solid border border-orange-500 w-72 h-20 rounded-lg flex justify-around align-center'>
           <figure className=' flex flex-col justify-center items-center'>     
            <Image
         src={post}
         alt="Picture of the author"
         width={25} 
         height={23}
         className="rounded bg-auto"
         />
         <div className='text-orange-500 text-xs'>Post</div>
         </figure>
         <figure className=' flex flex-col justify-center items-center'>     
           <Image
         src={playvideo}
         alt="Picture of the author"
         width={28} 
         height={28}
         className="rounded bg-auto"
         />
        <div className='text-orange-500 text-xs'>Video</div>
         </figure>
         <figure className=' flex flex-col justify-center items-center'>     
           <Image
         src={media}
         alt="Picture of the author"
         width={28} 
         height={24}
         className="rounded bg-auto"
         />
        <div className='text-orange-500 text-xs'>Discoveries</div>
         </figure>
            </div>
        </main>
    </section>
  )
}
