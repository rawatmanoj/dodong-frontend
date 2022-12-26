import React from "react";
import Image from "next/image";
import manSample from "@/images/profile/profile-man-sample.jpg";
import sharePhotos from "@/images/profile/sharePhotos.svg";
import inviteFriends from "@/images/profile/inviteFriends.svg";
import completeYourProfile from "@/images/profile/completeYourProfile.svg";

export default function Step1() {
  return (
    <section className="w-full h-screen bg-profile-back flex flex-col  items-center">
      <figure className="mt-10">
        <Image
          src={manSample}
          alt="Picture of the author"
          width={366}
          height={172}
        />
        <button className="my-0 mx-auto w-2/5 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500">
          Upload
        </button>
      </figure>
      {/* <h4 className='text-orange-593500 font-bold text-xl'>Aman Maan</h4> */}

      <main className=" mt-10 flex flex-col justify-center items-center">
        <h4 className="bg-000000 font-medium">
          You now have only 3 steps to complete to connect with your viewers on
          Dodong. Let’s get started.
        </h4>
        <h3 className="text-orange-593500 font-bold text-xl mt-5">
          0 to 3 <span className="text-#808080">Steps to follow</span>
        </h3>
        <div className="w-6/12">
          <div className="w-full flex flex-row  items-center mt-10">
            <Image
              className="mr-5"
              src={completeYourProfile}
              alt="Picture of the author"
              width={49}
              height={49}
            />
            <h4 className="font-bold text-2xl text-orange-593500">
              Complete Your Profile
            </h4>
          </div>
          <div className="w-full flex flex-row  items-center mt-10">
            <Image
              className="mr-5"
              src={sharePhotos}
              alt="Picture of the author"
              width={49}
              height={49}
            />
            <h4 className="font-bold text-2xl text-orange-593500">
              Invite Friends
            </h4>
          </div>
          <div className="w-full flex flex-row  items-center mt-10">
            <Image
              className="mr-5"
              src={inviteFriends}
              alt="Picture of the author"
              width={49}
              height={49}
            />
            <h4 className="font-bold text-2xl text-orange-593500">
              Share Photos and Videos
            </h4>
          </div>
        </div>
      </main>
    </section>
  );
}
