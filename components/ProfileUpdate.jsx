"use client";

import { Autocomplete } from '@mui/material';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

const ProfileUpdate = () => {
const {data : session} = useSession()

const [updatedData, setUpdatedData] = useState({
  role: session?.user.role,
  phNumber: session?.user.phNumber,
  country:session?.user.country,
  description: session?.user.description,
  dob: session?.user.dob,
  skills: session?.user.skills,
});
    
console.log(updatedData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };
  return (
    <div className="flex  border  flex-col bg-bgColor/5 min-w-3xl p-8 rounded backdrop-blur-2xl">
      <h2 className="h3Video">UPdate your Profile Details</h2>
      <div>
        <label htmlFor="dob" className="capitalize font-semibold">
          {" "}
          Enter Date of Birth :
          <input
            //   required
            onChange={handleChange}
            id="dob"
            type="date"
            name="dob"
            value={updatedData.dob}
            placeholder="05/9/2003"
            className="border p-4 w-[300px] bg-transparent rounded-md block focus:outline outline-purple-400"
          />
        </label>
        <label>
          {" "}
          Phone number :
          <input
            // required
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
        </label>
        {/* <label>
          <Autocomplete
            multiple
            id="tags-standard"
            options={tabs}
            getOptionLabel={(option) => option}
            defaultValue={[tabs[3]]}
            value={formData.skills}
            onChange={handleSkillsChange}
            className="border-b text-white w-full border-white/70 focus:outline-none min-w-2xl"
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Choose skills "
                placeholder="+ Add Skils"
                className="text-white text-capitalize"
                InputLabelProps={{
                  className: "text-white ", // Custom text color for label
                }}
                InputProps={{
                  ...params.InputProps,
                  className:
                    "text-white bg-bgColor min-w-2xl flex flex-wrap gap-x-3 gap-y-2",
                }}
              />
            )}
            renderOption={(props, option) => (
              <li
                {...props}
                className="text-white px-2  py-3 min-w-2xl bg-bgColor/90 hover:bg-bgColor/70" // Custom text and background color for each option
              >
                {option}
              </li>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  key={index}
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                  className="bg-l2 m-2 text-capitalize text-white"
                  deleteIcon={<IoClose className="text-white" />} // Custom cross icon color
                />
              ))
            }
            ChipProps={{
              className: "bg-l2 m-2 text-capitalize text-white",
            }}
          />
        </label> */}
      </div>
    </div>
  );
}

export default ProfileUpdate
