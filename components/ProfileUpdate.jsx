"use client";

import { DatePickerInput } from "@/config/constants";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

const ProfileUpdate = () => {
  const { data: session } = useSession();

  console.log("session in update",session);
  

  const [updatedData, setUpdatedData] = useState({
    role: session?.user.role,
    phNumber: session?.user.phNumber,
    country: session?.user.country,
    description: session?.user.description,
    DOB: session?.user.DOB,
    skills: session?.user.skills,
  });

  console.log(updatedData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };
  return (
    <div className="fixed z-10 top-0 bottom-0 left-0 flex py-20 justify-center w-screen h-screen bg-black/30">
      <div className="flex  border border-white/10  flex-col bg-bgColor/5 min-w-4xl p-8 rounded backdrop-blur-2xl">
        <h2 className="h3Video">Update your Profile Details</h2>
        <form>

      <DatePickerInput value={updatedData.DOB} onChangeFunction={(date)=>  setUpdatedData({ ...updatedData, DOB: date ? date.toISOString() : "" })} />
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
