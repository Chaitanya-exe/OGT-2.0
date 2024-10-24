"use client";

import { CountryInput, DatePickerInput, SkillsInput } from "@/config/constants";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../ui/Button";

const ProfileUpdate = ({ setShowUpdateForm }) => {
  const { data: session } = useSession();

  console.log("user update", session?.user);

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        countryNames.sort((a, b) => a.localeCompare(b));
        setCountryList(countryNames);
      })
      .catch((error) => {
        console.error("Error fetching country names:", error);
      });
  }, []);

  const [updatedData, setUpdatedData] = useState({
    role: session?.user.role,
    phNumber: session?.user.phNumber,
    country: session?.user.country,
    description: session?.user.description,
    DOB: session?.user.DOB,
    skills: session?.user.skills,
    // name : session?.user.name
  });

  console.log(updatedData);

  const handleProfileUpdate = async () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };
  return (
    <div className="fixed overflow-y-scroll  z-10 top-0 bottom-0 left-0 flex  justify-center w-full h-screen py-8 bg-black/30">
      <div className="absolute  top-10 right-1/3 -z-50 bg-l1/20 backdrop-blur-2xl w-52 h-52 rounded-full " />
      <div className="absolute hidden lg:block  -bottom-8 lg:left-1/3 -z-50 bg-cyan-400/5 backdrop-blur-2xl w-44 h-44 rounded-full " />
      <div className="flex  relative shadow gap-10 border border-white/10  flex-col bg-bgColor/5 min-w-4xl h-fit p-8 rounded backdrop-blur-2xl">
        <IoCloseOutline
          onClick={() => setShowUpdateForm(false)}
          className="absolute -right-3 -top-3 cursor-pointer hover:scale-90 size-8 bg-gradient-to-bl  from-white/30 to-BO/15 text-white border border-bgColor rounded-full"
        />
        <h2 className="text-center text-[36px] font-bold">
          Update your Profile Details
        </h2>
        <form onSubmit={handleProfileUpdate} className="flex flex-col  gap-4">
          {/* <input
            type="text"
            name="name"
            value={updatedData.name}
            onChange={handleChange}
            className="bg-transparent border border-white/10 text-white rounded-md p-3 focus:outline-purple-300 focus:outline"
          /> */}
          <div className="w-full flex gap-4 items-center ">
            <label className="">Phone number :</label>
            <input
              value={updatedData.phNumber}
              onChange={(e) => {
                const { name } = e.target;
                const num = e.target.value;
                const length = num.length;
                if (length <= 10) {
                  setUpdatedData({ ...updatedData, [name]: num });
                }
              }}
              id="phNumber"
              type="tel"
              name="phNumber"
              placeholder="Phone number"
              className="bg-transparent border border-white/10 text-white rounded-md p-3 focus:outline-purple-300 focus:outline"
            />
          </div>
          <div className="flex gap-4 items-center">
            <label>Enter your DOB :</label>
            <DatePickerInput
              value={updatedData.DOB}
              onChangeFunction={(date) =>
                setUpdatedData({
                  ...updatedData,
                  DOB: date ? date.toISOString() : "",
                })
              }
            />
          </div>
          <div className="flex gap-4 items-center ">
            <label>Choose Country :</label>
            <CountryInput
              value={updatedData.country}
              onChangeFunction={handleChange}
              countryList={countryList}
            />
          </div>
          <SkillsInput value={updatedData.skills} onChange={handleChange} />
          <div className="flex gap-4 items-start">
            <label className="text-nowrap">Description :</label>
            <textarea
              name="description"
              value={updatedData.description}
              onChange={handleChange}
              className="block bg-transparent border border-white/10 rounded-md p-3 focus:outline focus:outline-purple-400 w-full max-w-[700px] h-[200px]"
            />
          </div>
          <div className="justify-end gap-2 flex mt-5">
            <button
              onClick={() => {
                setShowUpdateForm(false);
              }}
            >
              <Button
                text="Cancel / Reset"
                type={"secondary"}
                className="w-[100px] "
              />
            </button>
            <button type="submit">
              <Button text="Edit" type={"primary"} className="w-[100px] " />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
