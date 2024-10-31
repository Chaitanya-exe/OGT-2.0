"use client";

import { CountryInput, DatePickerInput, SkillsInput } from "@/config/constants";
import axios from "axios";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { FaPhone } from "react-icons/fa";


const registerUser = async (form) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/users/update",
      form
    );
    const response = res.data;

    // console.log("response from function : ", response);

    return response;
  } catch (error) {
    console.log(error);
  }
};
const page = () => {
  const { data: session } = useSession();
  console.log(session);
  const [stepCount, setStepCount] = useState(0);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    role: "",
    phNumber: "",
    country: "Afghanistan",
    description: "",
    DOB: "",
    skills: ["Web Developement", "Designing"],
  });

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

 const handleNext = async () => {
   if (completedSteps[stepCount]) {
     if (stepCount === 4 && formData.role === "CLIENT") {
       // Skip case 5 if the role is "CLIENT" and go directly to step 6
       setStepCount(6);
       setLoading(true);

       const response = await registerUser(formData);
       setLoading(false);

       if (response?.response.role === "WORKER") {
         router.push("/developer");
       } else if (response?.response.role === "CLIENT") {
         router.push("/client");
       }
     } else if (stepCount === 5) {
       // When reaching the final step for WORKER role
       setStepCount(6);
       setLoading(true);

       const response = await registerUser(formData);
       setLoading(false);

       if (response?.response.role === "WORKER") {
         router.push("/developer");
       } else if (response?.response.role === "CLIENT") {
         router.push("/client");
       }
     } else {
       // Regular increment of steps
       setStepCount((prev) => Math.min(prev + 1, totalSteps - 1));
     }
   }
 };


  const handleSkillsChange = (event, value) => {
    setFormData({ ...formData, skills: value });
    if (formData.skills != []) {
      setCompletedSteps({ ...completedSteps, [stepCount]: true });
    }
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, DOB: date ? date.toISOString() : "" });
    if (date) {
      setCompletedSteps({ ...completedSteps, [stepCount]: true });
    }
  };
  const handleField = () => {
    switch (stepCount) {
      case 0:
        return (
          <>
            <label className="text-[60px] font-semibold">
              Tell us who you are!
            </label>
              <p className="text-white/70 pb-20 text-lg">
                Are you here to provide services or seek assistance? Select your
                role to get started.
              </p>
            <div className="flex *:flex *:items-center gap-14 items-center justify-center text-capitalise">
              <div >
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
                  👷 Provider
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
                  💼 Client
                </label>
              </div>
            </div>
          </>
        );

      case 1:
        return (
          <>
            <label className="text-[60px] font-semibold">
              Let’s stay in touch!
            </label>
            <p className="text-white/70 pb-20 text-lg">
              Enter your phone number for updates and support. We respect your
              privacy.
            </p>
            <Tooltip title="We’ll use this to contact you if needed">
              <div className="border w-fit mx-auto focus:outline-purple-300 focus:outline flex items-center border-white/10 text-white rounded-md px-3 ">
                <FaPhone className="inline-flex mr-3" />

                <input
                  // required
                  value={formData.phNumber}
                  onChange={(e) => {
                    const { name } = e.target;
                    const num = e.target.value;
                    const length = num.length;
                    if (length <= 10) {
                      setFormData({ ...formData, [name]: num });

                      if (num.trim() !== "" && num.length === 10) {
                        setCompletedSteps({
                          ...completedSteps,
                          [stepCount]: true,
                        });
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
                  className="bg-transparent p-3 focus:outline-none"
                />
              </div>
            </Tooltip>
          </>
        );
      case 2:
        return (
          <>
            <label className="capitalize text-[60px] font-semibold">
              {" "}
              Where are you based?
            </label>
            <p className="text-white/70 pb-20 text-lg">
              Select your country for a localized experience.
            </p>
            <CountryInput
              value={formData.country}
              onChangeFunction={handleChange}
              countryList={countryList}
            />
          </>
        );
      case 3:
        return (
          <>
            <label className="text-[60px] font-semibold">Desciption :</label>
            <p className="text-white/70 pb-20 text-lg">
              Briefly describe your goals. This will help us tailor your
              experience
            </p>{" "}
            <textarea
              name="description"
              value={formData.description}
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
              When were you born?
            </label>
            <p className="text-white/70 pb-20 text-lg">
              Enter your date of birth to verify your age and customize your
              experience.
            </p>

            <DatePickerInput
              value={formData.DOB}
              onChangeFunction={handleDateChange}
            />
          </>
        );
      case 5:
         if (formData.role === "CLIENT") return null;
        return (
          <>
            <label className="capitalize text-[60px]  font-semibold">
              {" "}
              Showcase your expertise!
            </label>
            <p className="text-white/70 pb-20 text-lg">
              List your skills to connect with relevant opportunities.
            </p>
            <SkillsInput
              value={formData.skills}
              onChangeFunction={handleSkillsChange}
            />
          </>
        );
    }
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, damping: 12, type: "spring" }}
          exit={{ x: -100, opacity: 0 }}
          className="flex flex-col mx-12 max-w-2xl sm:mx-auto items-center justify-center mt-28"
        >
          <div className="space-y-2 text-center">{handleField()}</div>
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
              disabled={!completedSteps[stepCount] || loading}
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
        </motion.div>
      )}
    </section>
  );
};

export default page;
