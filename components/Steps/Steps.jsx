"use client";

import { useState } from "react";
import React from "react";
import Button from "../ui/Button";
import {motion} from "framer-motion"
import { fadeAnimation } from "@/config/motion";

const Steps = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0);
  // console.log(currentStep);

  return (
    <div className="flex my-4 *:px-16 *:py-24 rounded-[30px] overflow-hidden">
      <StepperTabs
        data={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <div className="bg-Nwhite flex-1 text-bgColor space-y-2">
      <motion.div {...fadeAnimation}>

      {data.content[currentStep].array.map((content)=>(
        <motion.ul {...fadeAnimation} className="list list-disc">
            <li>
                <h2 className="py-2 h3Video">
                    {content.point}
                </h2>
                <p>{content.text}</p>
            </li>
        </motion.ul>
      ))}
      </motion.div>
    

      </div>
    </div>
  );
};

export default Steps;

const StepperTabs = ({ data, currentStep, setCurrentStep }) => {
  return (
    <div className="bg-e1/5 text-lg uppercase flex flex-col items-start justify-center">
      {data.tabNames.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <div
            onClick={() => setCurrentStep(index)}
            className="flex cursor-pointer items-center gap-3"
          >
            <div>
              <Button
                type={currentStep >= index ? "primary" : "secondary"}
                className="w-[43px]"
                text={
                  <span>
                    <span className="text">0</span>
                    <span className={`${currentStep >= index && "font-semibold" } text-xl `}>{tab.id}</span>
                  </span>
                }
              />
            </div>
            <h2 className={currentStep >= index ? "text-l2" : "text-BO"}>
              {tab.name}
            </h2>
          </div>

          {index < data.tabNames.length - 1 && (
            <div className="h-[45px] overflow-hidden relative bg-BO w-[5px] m-5 rounded-full group">
              <span
                className={`
        absolute inset-0 bg-gradient-to-tl from-l1 via-pink-100/70 to-l1 
        ease-linear duration-300 origin-top transform transition-transform 
        ${currentStep > index ? "scale-y-100" : "scale-y-0"}
      `}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
