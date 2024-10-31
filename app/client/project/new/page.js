"use client";

import CldyUploadWidget from "@/components/CldyUploadWidget";
import VerticalLinearStepperEg from "@/components/EgStepper";
import Button from "@/components/ui/Button";
import { newProjectPrompts } from "@/config/constants";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";

const page = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [projectData, setProjectData] = useState({
    title: "",
    desc: "",
    files: [],
    startDate: "",
    endDate: "",
    stipend: "",
    skills: [],
    questions: [],
    requirements: "",
  });
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function handleStringChange(e) {
    const { name, value } = e.target;
     setProjectData({ ...projectData, [name]: value });
  }

  const renderComponent = () => {
    switch (activeStep) {
      case 0:
        return (
          <form className="*:my-6">
            <label className="block">
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
            </label>
            <label className="block">
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
            </label>
            <label className="block">
              {" "}
              Upload additional files (Optional)
              {/* <div className="flex my-2 items-end">
                <input
                  id="desc"
                  name="desc"
                  type="file"
                  value={projectData.files}
                  onChange={handleStringChange}
                  placeholder="Describe your vision and goals for this project..."
                  className="w-fit bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
                />
              </div> */}
              <CldyUploadWidget
                text={"Upload Files"}
                className="w-fit bg-white/5 border border-white/20 p-3 focus:outline-pink-300/20 outline-none focus:border-none rounded"
              />
            </label>
            <button onClick={handleNext}>
              <Button type="primary" text="Next" className="w-[110px]" />
            </button>
          </form>
        );

      case 1:
        return <div>erf</div>;
    }
  };

  return (
    <div className="flex gap-8 mx-auto">
      <VerticalLinearStepperEg activeStep={activeStep} />
      <section className="">
        <div className="py-10">
          <h2 className="h1Video">{newProjectPrompts[activeStep].label}</h2>
          <h3 className="text-white/70">
            {newProjectPrompts[activeStep].description}
          </h3>
        </div>

        {renderComponent()}
      </section>
    </div>
  );
};

export default page;
