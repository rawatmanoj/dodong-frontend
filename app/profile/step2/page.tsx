"use client";
import React, { useState } from "react";
import Image from "next/image";
import manSample from "@/images/profile/profile-man-sample.jpg";
import sharePhotos from "@/images/profile/sharePhotos.svg";
import inviteFriends from "@/images/profile/inviteFriends.svg";
import squareProfile from "@/images/profile/square-profile.svg";
import { Roboto } from "@next/font/google";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  personalProfileSchema,
  professionalProfileSchema,
} from "@/lib/validations/auth";
import { useMutation } from "@tanstack/react-query";
import z, { ZodError } from "zod";
import { postRequest } from "@/lib/networkHelper";
import { Urls } from "@/lib/apiConstants";
import { fromZodError } from "zod-validation-error";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store/store";
import { cn } from "@/lib/utils";
import PersonalProfile from "@/components/profile/Personal";
import ProfessionalProfile from "@/components/profile/Professional";
const roboto = Roboto({ weight: "500" });

type personalProfileSchema = z.infer<typeof personalProfileSchema>;
type professionalProfileSchema = z.infer<typeof professionalProfileSchema>;

type MutationType = {
  data: personalProfileSchema | professionalProfileSchema;
  type: string;
};

export default function Step1() {
  const user = useSelector((state: RootState) => state.user);
  const [tab, setTab] = useState<boolean>(true);
  //   console.log(user);
  const mutation = useMutation({
    mutationFn: ({ data, type }: MutationType) => {
      console.log(data, type);
      return postRequest(Urls.professionalProfile, data);
    },
    onSuccess: (data) => {
      return toast("profile updated successfully");
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

  const handleSubmitProfessional = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    try {
      const data = {
        occupation: (event.target as HTMLFormElement).occupation.value,
        company: (event.target as HTMLFormElement).company.value,
        jobLocation: (event.target as HTMLFormElement).jobLocation.value,
        phoneNumber: (event.target as HTMLFormElement).phoneNumber.value,
        brandDetails: (event.target as HTMLFormElement).brandDetails.value,
        other: (event.target as HTMLFormElement).other.value,
        userId: user?.id,
      };
      const isValidData = professionalProfileSchema.parse(data);
      console.log(isValidData, "yo");
      mutation.mutate({ data: isValidData, type: "professional" });
    } catch (error: any) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        console.log(validationError);
        toast(validationError.message);
      }
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    try {
      const data = {
        userId: user?.id,
        aboutMe: (event.target as HTMLFormElement).aboutme.value,
        name: (event.target as HTMLFormElement).names.value,
        displayName: (event.target as HTMLFormElement).displayName.value,
        dob: new Date((event.target as HTMLFormElement).dob.value),
        occupation: (event.target as HTMLFormElement).occupation.value,
        idDetails: (event.target as HTMLFormElement).idDetails.value,
        facebookURL: (event.target as HTMLFormElement).facebookURL.value,
        linkedInURL: (event.target as HTMLFormElement).linkedInURL.value,
        twitterHandle: (event.target as HTMLFormElement).twitterHandle.value,
      };
      const isValidData = personalProfileSchema.parse(data);
      console.log(data, "yo");
      mutation.mutate({ data: isValidData, type: "personal" });
    } catch (error: any) {
      if (error instanceof ZodError) {
        console.log(error);
        const validationError = fromZodError(error);
        toast(validationError.message);
      }
      console.log(error);
    }
  };

  const handleTab = (val: boolean): void => {
    setTab(val);
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
          <div
            onClick={() => {
              handleTab(false);
            }}
          >
            <button>Personal</button>
            <div className={cn("h-1 w-15 ", !tab && "bg-orange-500")} />
          </div>
          <div
            onClick={() => {
              handleTab(true);
            }}
          >
            <button>Professional</button>
            <div className={cn("h-1 w-18", tab && "bg-orange-500")} />
          </div>
        </header>
        {tab ? (
          <ProfessionalProfile
            handleSubmitProfessional={handleSubmitProfessional}
          />
        ) : (
          <PersonalProfile handleSubmit={handleSubmit} />
        )}
      </main>
    </section>
  );
}
