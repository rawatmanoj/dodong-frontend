import React from "react";

type PersonalProfileProps = {
  handleSubmitProfessional: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function ProfessionalProfile({
  handleSubmitProfessional,
}: PersonalProfileProps) {
  return (
    <form
      id="my-form"
      onSubmit={handleSubmitProfessional}
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
  );
}
