"use client";

import CldyUploadWidget from "@/components/CldyUploadWidget";
import VerticalLinearStepperEg from "@/components/EgStepper";
import Button from "@/components/ui/Button";
import { DatePickerInput, newProjectPrompts } from "@/config/constants";
import { Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";

import { CiCircleQuestion } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import {motion , AnimatePresence} from "framer-motion"
import { fadeAnimation, headContentAnimation, headTextAnimation } from "@/config/motion";

const page = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [openInputField, setOpenInputField] = useState({
    forSkills: true,
    forQues: false,
  });
  const [projectData, setProjectData] = useState({
    title: "",
    desc: "",
    files: [],
    startDate: "",
    endDate: "",
    stipend: "",
    skills: ["erc", "cer"],
    questions: [
      "Add a parameter for the array name (e.g., arrayName) in both handleAddItem and removeItem functions.",
    ],
    requirements: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [newItem, setNewItem] = useState("");

  console.log(projectData);

  const handleNewItem = (fieldName) => {
    setProjectData((prevData) => ({
      ...prevData,
      [fieldName]: [...prevData[fieldName], newItem],
    }));
    setNewItem(""); // Clear the input field
    setOpenInputField((prev) => ({
      ...prev,
      [fieldName === "skills" ? "forSkills" : "forQues"]: false,
    })); // Close the input field after adding
  };

  const removeItem = (fieldName, item) => {
    setProjectData((prevData) => ({
      ...prevData,
      [fieldName]: prevData[fieldName].filter((value) => value !== item),
    }));
  };

  const handleNext = () => {
    if (activeStep === 2) {
      try {
        setLoading(true);
        //api project create
        setTimeout(()=>{

          setLoading(false);
        },[3000])
        router.push("/client");
      } catch (error) {
        console.log(error);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function handleStringChange(e) {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Stagger each child with 0.15s delay
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 ,type:"spring",damping:22} },
  };

  const renderComponent = () => {
    switch (activeStep) {
      case 0:
        const isDisabled = projectData.title === '' || projectData.desc === '';

        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="*:my-6"
          >
            <motion.label variants={itemVariants} className="block">
              Project Title
              <div className="flex my-2 items-center">
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={projectData.title}
                  onChange={handleStringChange}
                  placeholder="E.g., ‘Innovative Marketing Campaign 2024"
                  className="w-full bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
                <Tooltip
                  title="A clear, catchy title that defines your project"
                  placement="bottom"
                >
                  <span>
                    <CiCircleQuestion className="inline-flex size-7 text-white/70 mx-2 " />
                  </span>
                </Tooltip>
              </div>
            </motion.label>
            <motion.label variants={itemVariants} className="block">
              {" "}
              Project Description
              <div className="flex my-2 items-end">
                <textarea
                  id="desc"
                  name="desc"
                  value={projectData.desc}
                  rows={10}
                  onChange={handleStringChange}
                  placeholder="Describe your vision and goals for this project..."
                  className="w-full bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
                <Tooltip
                  title="What do you want to achieve? "
                  placement="bottom"
                >
                  <span>
                    <CiCircleQuestion className="inline-flex size-7 text-white/70 mx-2 " />
                  </span>
                </Tooltip>
              </div>
            </motion.label>
            <motion.label variants={itemVariants} className="block">
              {" "}
              Upload additional files (Optional)
              <div className="flex my-2 items-end">
                <input
                  id="files"
                  name="files"
                  type="file"
                  value={projectData.files}
                  onChange={handleStringChange}
                  placeholder="Describe your vision and goals for this project..."
                  className="w-fit bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
              </div>
              <CldyUploadWidget
                text={"Upload Files"}
                className="w-fit flex-start my-2 bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
              />
            </motion.label>
            <button disabled={isDisabled} onClick={handleNext}>
              <Button
                type={isDisabled ? "secondary" : "primary"}
                text="Next"
                className="w-[110px]"
              />
            </button>
          </motion.div>
        );

      case 1:
        
        return (
          <motion.div  className=" *:my-6">
            <div className="flex gap-6 items-center ">
              <div className="flex w-fit px-3 items-center gap-2 bg-white/5 border border-white/20 focus:outline-pink-300/20 outline-none focus:border-none rounded">
                <DatePickerInput
                  value={projectData.startDate}
                  onChangeFunction={(date) => {
                    setProjectData({
                      ...projectData,
                      startDate: date ? date.toISOString() : "",
                    });
                  }}
                  placeholder="Start Date"
                  className="p-3 bg-transparent focus:outline-none "
                />
                <Image
                  src={"/calender.svg"}
                  width={22}
                  height={22}
                  alt="svg"
                  className="mr-4"
                />
              </div>
              <div className="flex w-fit px-3 items-center gap-2 bg-white/5 border border-white/20 focus:outline-pink-300/20 outline-none focus:border-none rounded">
                <DatePickerInput
                  value={projectData.endDate}
                  onChangeFunction={(date) => {
                    setProjectData({
                      ...projectData,
                      endDate: date ? date.toISOString() : "",
                    });
                  }}
                  placeholder="End Date"
                  className="p-3 bg-transparent focus:outline-none "
                />
                <Image
                  src={"/calender.svg"}
                  width={22}
                  height={22}
                  alt="svg"
                  className="mr-4"
                />
              </div>
            </div>
            <label className="block">
              Project Stipend
              <div className="flex my-2 items-center">
                <input
                  id="stipend"
                  name="stipend"
                  type="text"
                  value={projectData.stipend}
                  onChange={handleStringChange}
                  placeholder="Invest in success! E.g., $2,000 - $5,000"
                  className="w-full bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
                <Tooltip
                  title="Specify the budget (E.g., $5000)"
                  placement="bottom"
                >
                  <span>
                    <CiCircleQuestion className="inline-flex size-7 text-white/70 mx-2 " />
                  </span>
                </Tooltip>
              </div>
            </label>
            <label className="block">
              {" "}
              Project Requirements
              <div className="flex my-2 items-end">
                <textarea
                  id="requirements"
                  name="requirements"
                  value={projectData.requirements}
                  rows={10}
                  onChange={handleStringChange}
                  placeholder="List any specific requirements to ensure success..."
                  className="w-full bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
              </div>
            </label>
            <div className="flex gap-4">
              <button onClick={handleBack}>
                <Button type="secondary" text="Back" className="w-[110px]" />
              </button>
              <button onClick={handleNext}>
                <Button type="primary" text="Next" className="w-[110px]" />
              </button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div  className="space-y-12">
            <div className=" *:my-1">
              <label className="block">Skills required :</label>
              <button
                onClick={(prev) => {
                  setOpenInputField({ ...prev, forSkills: true });
                }}
              >
                <Button
                  type={"secondary"}
                  text="+ Add skills"
                  className={"w-[120px]"}
                />
              </button>
              {openInputField.forSkills && (
                <div className="space-x-3 mb-3">
                  <input
                    type="text"
                    name="skill"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Enter a skill"
                    className="w-fit bg-white/5 border border-white/20 p-2 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                  />
                  <button
                    onClick={() => handleNewItem("skills")}
                    className="border  p-2 rounded border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white  text-fuchsia-800"
                  >
                    Add
                  </button>
                </div>
              )}
              <div className="flex pt-3 flex-wrap gap-3">
                {projectData.skills.map((skill, i) => (
                  <span className="flex items-center capitalize px-2 py-0.5 text-sm bg-fuchsia-800/20 border border-fuchsia-950 hover:bg-fuchsia-800/60 rounded-full ">
                    {skill}
                    <button onClick={() => removeItem("skills", skill)}>
                      <IoIosClose className="size-5 ml-3 text-white/70 hover:text-white hover:scale-105" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <div className=" *:my-1 text-wrap max-w-2xl">
              <label className="block">Questions required :</label>
              <button
                onClick={(prev) => {
                  setOpenInputField({ ...prev, forQues: true });
                }}
              >
                <Button
                  type={"secondary"}
                  text="+ Add skills"
                  className={"w-[120px]"}
                />
              </button>
              {openInputField.forQues && (
                <div className="flex items-center gap-3 my-3">
                  <input
                    type="text"
                    name="skill"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Enter a skill"
                    className="w-full bg-white/5 border border-white/20 p-2 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                  />
                  <button
                    onClick={() => handleNewItem("questions")}
                    className="border  p-2 rounded border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white  text-fuchsia-800"
                  >
                    Add
                  </button>
                </div>
              )}
              <div className="flex pt-3 flex-col *:border-b *:border-white/10 gap-3">
                {projectData.questions.map((ques, i) => (
                  <span className="flex  items-center justify-between capitalize p-3 text-sm bg-fuchsia-800/20 rounded-full ">
                    {ques}
                    <button onClick={() => removeItem("questions", ques)}>
                      <IoIosClose className="size-5 ml-3 text-white/70 hover:text-white hover:scale-105" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={handleBack}>
                <Button type="secondary" text="Back" className="w-[110px]" />
              </button>
              <button onClick={handleNext}>
                <Button type="primary" text="Submit" className="w-[110px]" />
              </button>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <>

   {
    loading ? (

<Loader />

    ) : (


     <div className="flex gap-20 items-start my-20  mx-32">
      <VerticalLinearStepperEg activeStep={activeStep} />
      <section className="max-w-[850px] px-8 flex-1 overflow-y-scroll">
        <motion.div {...fadeAnimation} className="">
          <h2 className="h1Video">{newProjectPrompts[activeStep].label}</h2>
          {newProjectPrompts[activeStep].point ? (
            <ul className="text-white/70 list-disc list-inside">
              <li>{newProjectPrompts[activeStep].description}</li>
              <li>{newProjectPrompts[activeStep].point}</li>
            </ul>
          ) : (
            <h3 className="text-white/70">
              {newProjectPrompts[activeStep].description}
            </h3>
          )}
        </motion.div>

        {renderComponent()}
      </section>
    </div>
    )
   }
    </>
  );
};

export default page;
