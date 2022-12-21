"use client";
import React from "react";
import Image from "next/image";
import manSample from "@/images/profile/profile-man-sample.jpg";
import sharePhotos from "@/images/profile/sharePhotos.svg";
import inviteFriends from "@/images/profile/inviteFriends.svg";
import squareProfile from "@/images/profile/square-profile.svg";
import { Roboto } from "@next/font/google";
import { toast } from "react-hot-toast";
import axios from "axios";
import { personalProfileSchema } from "@/lib/validations/auth";
import { useMutation } from "@tanstack/react-query";
import z, { ZodError } from "zod";
import { postRequest } from "@/lib/networkHelper";
import { Urls } from "@/lib/apiConstants";
import { fromZodError } from "zod-validation-error";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
const roboto = Roboto({ weight: "500" });

type personalProfileSchema = z.infer<typeof personalProfileSchema>;

export default function Step1() {
  const user = useSelector((state: RootState) => state.userReducer);
  console.log(user);
  const mutation = useMutation({
    mutationFn: (data: personalProfileSchema) => {
      console.log(data);
      return postRequest(Urls.personalProfile, data);
    },
    onSuccess: (data) => {
      console.log(data, "dataaaaaa");
    },

    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return toast(error.response?.data.message);
      }
      if (error instanceof ZodError) {
        console.log(fromZodError(error));
        return toast("Please enter valid data");
      }
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): any => {
    event.preventDefault();
    try {
      const data = {
        occupation: (event.target as HTMLFormElement).occupation.value,
        company: (event.target as HTMLFormElement).company.value,
        jobLocation: (event.target as HTMLFormElement).jobLocation.value,
        phoneNumber: (event.target as HTMLFormElement).phoneNumber.value,
        brandDetails: (event.target as HTMLFormElement).brandDetails.value,
        other: (event.target as HTMLFormElement).other.value,
      };
      const isValidData = personalProfileSchema.parse(data);
      console.log(isValidData, "yo");
      mutation.mutate(isValidData);
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error);
        const validationError = fromZodError(error);
        return toast(validationError.message);
      }
      console.log(error);
    }
  };

  return (
    <section
      className={`w-full h-screen bg-profile-back flex flex-col  items-center ${roboto.className}`}
    >
      <header className="flex flex-row justify-center items-center w-full mt-20">
        <figure className="bg-red-100">
          <Image
            src={squareProfile}
            alt="Picture of the author"
            width={43}
            height={43}
            className="rounded"
          />
        </figure>
        <h3 className="mr-10 ml-10 font-medium">
          When you add details about you, your connects will be engaged more
          with your profile
        </h3>
        <button
          form="my-form"
          type="submit"
          className="w-1/12 inline-flex  items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#24292F]/90 focus:outline-none focus:ring-4 focus:ring-[#24292F]/50 disabled:opacity-50 dark:hover:bg-[#050708]/30 dark:focus:ring-slate-500"
        >
          Save
        </button>
      </header>

      <main
        className={`mt-10 flex flex-col justify-center items-center  w-2/5 `}
      >
        <header className="flex justify-around w-full mb-10">
          <div>
            <button>Personal</button>
            <div className="h-1 w-15 bg-orange-500" />
          </div>
          <div>
            <button>Professional</button>
            <div
            // className='h-1 w-18 bg-orange-500'
            />
          </div>
        </header>
        <form
          id="my-form"
          onSubmit={handleSubmit}
          className=" w-full  flex flex-col justify-between h-96 text-orange-593500 font-semibold"
        >
          <div className="flex flex-col">
            <label>Occupation Type</label>
            <input
              placeholder="occupation"
              className="bg-transparent outline-none font-normal"
              id="occupation"
              type="text"
              name="occupation"
            />
            <hr />
          </div>
          <div className="flex flex-col">
            <label>Company Name</label>
            <input
              placeholder="Company"
              className="bg-transparent outline-none font-normal"
              id="company"
              type="text"
              name="company"
            />
            <hr />
          </div>
          <div className="flex flex-col">
            <label>Job Location</label>
            <input
              placeholder="Job Location"
              className="bg-transparent outline-none font-normal"
              id="jobLocation"
              type="text"
              name="jobLocation"
            />
            <hr />
          </div>
          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              placeholder="phone number"
              className="bg-transparent outline-none font-normal"
              id="phoneNumber"
              type="number"
              name="phoneNumber"
            />
            <hr />
          </div>
          <div className="flex flex-col text-color-orange-593500">
            <label className="">Brand Details</label>
            <input
              placeholder="Brand Details"
              className="bg-transparent outline-none font-normal"
              id="brandDetails"
              type="text"
              name="brandDetails"
            />
            <hr />
          </div>
          <div className="flex flex-col text-color-orange-593500">
            <label className="">Other</label>
            <input
              placeholder="Other"
              className="bg-transparent outline-none font-normal"
              id="other"
              type="text"
              name="other"
            />
            <hr />
          </div>
        </form>
      </main>
    </section>
  );
}
