import React from "react";

type ProfessionalProfileProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function PersonalProfile({
  handleSubmit,
}: ProfessionalProfileProps) {
  return (
    <form
      id="my-form"
      onSubmit={handleSubmit}
      className=" w-full  flex flex-col justify-between h-96 text-orange-593500 font-semibold"
    >
      <div className="flex flex-col">
        <label>About me</label>
        <input
          placeholder="about me"
          className="bg-transparent outline-none font-normal"
          id="aboutme"
          type="text"
          name="aboutme"
        />
        <hr />
      </div>
      <div className="flex flex-col">
        <label>Occupation</label>
        <input
          placeholder="Occupation"
          className="bg-transparent outline-none font-normal"
          id="occupation"
          type="text"
          name="occupation"
        />
        <hr />
      </div>
      <div className="flex flex-col">
        <label>Name</label>
        <input
          placeholder="name"
          className="bg-transparent outline-none font-normal"
          id="names"
          type="text"
          name="names"
        />
        <hr />
      </div>
      <div className="flex flex-col">
        <label>Display Name</label>
        <input
          placeholder="Display Name"
          className="bg-transparent outline-none font-normal"
          id="displayName"
          type="text"
          name="displayName"
        />
        <hr />
      </div>
      <div className="flex flex-col">
        <label>DOB</label>
        <input
          placeholder="DateOfBirth"
          className="bg-transparent outline-none font-normal"
          id="dob"
          type="date"
          name="dob"
        />
        <hr />
      </div>
      <div className="flex flex-col text-color-orange-593500">
        <label className="">Id Details</label>
        <input
          placeholder="Id Details"
          className="bg-transparent outline-none font-normal"
          id="idDetails"
          type="text"
          name="idDetails"
        />
        <hr />
      </div>
      <div className="flex flex-col text-color-orange-593500">
        <label className="">Facebook URL</label>
        <input
          placeholder="Facebook URL"
          className="bg-transparent outline-none font-normal"
          id="facebookURL"
          type="text"
          name="facebookURL"
        />
        <hr />
      </div>
      <div className="flex flex-col text-color-orange-593500">
        <label className="">LinkedIn URL</label>
        <input
          placeholder="LinkedIn URL"
          className="bg-transparent outline-none font-normal"
          id="linkedInURL"
          type="text"
          name="linkedInURL"
        />
        <hr />
      </div>
      <div className="flex flex-col text-color-orange-593500">
        <label className="">Twitter Handle</label>
        <input
          placeholder="Twitter Handle"
          className="bg-transparent outline-none font-normal"
          id="twitterHandle"
          type="text"
          name="twitterHandle"
        />
        <hr />
      </div>
    </form>
  );
}
