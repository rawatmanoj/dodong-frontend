import React from 'react'
import Image from 'next/image';
import manSample from "@/images/profile/profile-man-sample.jpg"
import sharePhotos from "@/images/profile/sharePhotos.svg"
import inviteFriends from "@/images/profile/inviteFriends.svg"
import squareProfile from "@/images/profile/square-profile.svg"
import { Roboto } from '@next/font/google';
const roboto = Roboto({weight:'500'})
export default function Step1() {
  return (
    <section className={`w-full h-screen bg-profile-back flex flex-col  items-center ${roboto.className}`}>
        <header className='flex flex-row justify-center items-center w-full mt-20'>
        <figure className='bg-red-100'>
            <Image  
             src={squareProfile}
             alt="Picture of the author"
             width={43} 
             height={43}
             className="rounded"
            />
        </figure>
         <h3 className='mr-10 ml-10 font-medium'>When you add details about you, your connects will be engaged more with your profile</h3>  
         <button 
          className="w-1/12 inline-flex  items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
         >
            Save
         </button>  
        </header>
        
        <main className={`mt-10 flex flex-col justify-center items-center  w-2/5 `}>
            <header className='flex justify-around w-full mb-10'>
                <div>
                    <button>Personal</button>
                    <div  className='h-1 w-15 bg-orange-500' />                                               
                </div>
                <div>
                    <button>Professional</button>
                    <div 
                    // className='h-1 w-18 bg-orange-500'
                    />
                </div>                    
            </header>
            <form className=' w-full  flex flex-col justify-between h-96 text-orange-593500 font-semibold'>
                <div className='flex flex-col'>
                <label>
                    Occupation Type
                </label>
                <input 
                placeholder='occupation'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
                <div className='flex flex-col'>                
                <label>
                    Company Name
                </label>
                <input 
                placeholder='Company'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
                <div className='flex flex-col'>
                <label>
                    Job Location
                </label>
                <input 
                placeholder='Job Location'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
                <div className='flex flex-col'>
                <label>
                    Official phone number
                </label>
                <input 
                placeholder='phone number'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
                <div className='flex flex-col text-color-orange-593500' >
                <label className=''>
                    Brand Details
                </label>
                <input 
                placeholder='Brand Details'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
                <div className='flex flex-col text-color-orange-593500' >
                <label className=''>
                    Other
                </label>
                <input 
                placeholder='Other'
                className='bg-transparent outline-none font-normal'
                />
                <hr/>
                </div>
            </form>
          
        </main>
    </section>
  )
}
