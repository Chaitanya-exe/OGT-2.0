"use client";

import { tabs } from "@/config/constants";
import axios from "axios";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion"
import { transition } from "@/config/motion";

async function registerUser(form) {
  const res = await axios.post("http://localhost:3000/api/users/update", form);
  console.log(res);
  const response = await res.json();
  
  return response;
}

const page = () => {
  const [stepCount, setStepCount] = useState(0);
  const router = useRouter();

  const [formData, setFormData] = useState({
    role: "",
    phNumber: "",
    country: "",
    description: "",
    DOB : "",
    skills: ["Web Developement", "Designing"],
  });

  const [conuntryList, setCountryList] = useState([]);

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
  });

  const [completedSteps, setCompletedSteps] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  let totalSteps = 7;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.trim() !== "") {
      setCompletedSteps({ ...completedSteps, [stepCount]: true });
    } else {
      setCompletedSteps({ ...completedSteps, [stepCount]: false });
    }
  };

  const handlePrev = () => {
    setStepCount((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    if (completedSteps[stepCount]) {
      setStepCount((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handleSkillsChange = (event, value) => {
    setFormData({ ...formData, skills: value });
    if (formData.skills != []) {
      setCompletedSteps({ ...completedSteps, [stepCount]: true });
    }
  };
  const handleField = () => {
    switch (stepCount) {
      case 0:
        return (
          <div className="space-y-8">
            <label className="text-[60px] font-semibold">Choose Role:</label>
            <div className="flex gap-10 text-capitalise">
              <div>
                <input
                  id="developer"
                  type="radio"
                  name="role"
                  value="WORKER"
                  checked={formData.role === "WORKER"}
                  onChange={handleChange}
                  className=" checked:text-white text-BO"
                />{" "}
                <label htmlFor="developer" className="text-lg mx-1.5">
                  Provider
                </label>
              </div>
              <div>
                <input
                  id="employer"
                  type="radio"
                  name="role"
                  value="CLIENT"
                  checked={formData.role === "CLIENT"}
                  onChange={handleChange}
                  className=" checked:text-white text-BO"
                />{" "}
                <label htmlFor="employer" className="text-lg mx-1.5">
                  {" "}
                  Client
                </label>
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <>
            <label className="text-[60px] font-semibold">Phone number :</label>
            <input
              required
              value={formData.phNumber}
              onChange={(e) => {
                const { name } = e.target;
                const num = e.target.value;
                const length = num.length;
                if (length <= 10) {
                  setFormData({ ...formData, [name]: num });

                  if (num.trim() !== "" && num.length === 10) {
                    setCompletedSteps({ ...completedSteps, [stepCount]: true });
                  } else {
                    setCompletedSteps({
                      ...completedSteps,
                      [stepCount]: false,
                    });
                  }
                }
              }}
              id="phNumber"
              type="tel"
              name="phNumber"
              placeholder="Phone number"
              className="bg-transparent border border-white/10 text-white rounded-md p-3 focus:outline-purple-300 focus:outline"
            />
          </>
        );
      case 2:
        return (
          <>
            <label className="capitalize text-[60px] font-semibold">
              {" "}
              country :
            </label>
            <select
              value={formData.country}
              name="country"
              onChange={handleChange}
              className=" bg-transparent border border-white/10   p-3 rounded-md focus:outline outline-purple-400"
            >
              {conuntryList.map((country) => (
                <option
                  value={country}
                  className="bg-white/5 text-bgColor hover:white/10"
                >
                  {country}
                </option>
              ))}
            </select>
          </>
        );
      case 3:
        return (
          <>
            <label className="text-[60px] font-semibold">Desciption : </label>
            <textarea
              name="description"
              values={formData.description}
              onChange={handleChange}
              className="block bg-transparent border rounded-md p-3 text focus:outline focus:outline-purple-400 w-[700px] h-[200px]"
            />
          </>
        );
      case 4:
        return (
          <>
            <label className="capitalize text-[60px]  font-semibold">
              {" "}
              Enter Date of Birth :
            </label>
            <input
              required
              onChange={handleChange}
              // min="18"
              // max="90"
              id="dob"
              type="date"
              name="DOB"
              value={formData.DOB}
              placeholder="05/9/2003"
              className="border p-4 w-[300px] text-white bg-transparent rounded-md block focus:outline outline-purple-400"
            />
          </>
        );
      case 5:
        return (
          <>
            <label className="capitalize text-[60px]  font-semibold">
              {" "}
              Enter Your Skills :
            </label>
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
          </>
        );
    }
  };

  console.log(stepCount, completedSteps);

  if (stepCount === 6) {
    const response = registerUser(formData);

    if (response.role === "CLIENT") {
      router.push("/employer");
    }

    if (response.role === "WORKER") {
      router.push("/developer");
    }
  }
  if(stepCount === 6){
    return <p>Loading.......</p>
  }

  return (

    <section className="flex flex-col mx-12 max-w-2xl sm:mx-auto items-center justify-center mt-28">
      <motion.div initial={{x:10,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,damping:12,type:'spring'}} exit={{x:-100,opacity:0}} className="spacce-y-12">{handleField()}</motion.div>
      <div className="flex mt-20 justify-between w-full">
        <button
          disabled={stepCount === 0}
          onClick={handlePrev}
          className={` px-7 py-0.5 rounded-[22px] border border-white/10
    ${
      stepCount === 0
        ? "border border-white/10 bg-transparent hover:bg-white/5"
        : "hover:primary_grad"
    }`}
        >
          Previous
        </button>
        <button
          disabled={!completedSteps[stepCount]}
          onClick={handleNext}
          className={`secondary_button px-10 py-0.5 rounded-[22px] 
    ${
      !completedSteps[stepCount]
        ? "border border-white/10 bg-transparent"
        : "hover:primary_grad"
    }`}
        >
          {stepCount === 5 ? "Submit" : "Next"}
        </button>
      </div>
    </section>
  );
};

export default page;
