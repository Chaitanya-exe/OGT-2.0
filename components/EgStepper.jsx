"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { newProjectSteps } from "@/config/constants";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BiCheckCircle, BiPhone } from "react-icons/bi";
import {motion} from "framer-motion"
import { fadeAnimation } from "@/config/motion";

// Define custom icon styles based on step state
function CustomStepIcon({ active, completed, icon }) {
  const iconComponents = {
    1: <MdAccountBalanceWallet />,
    2: <BiPhone />,
    3: <BiCheckCircle />,
  };

  return (
    <div
      className={`flex items-center justify-center w-10 h-10 rounded-full ${
        completed
          ? "bg-gradient-to-r from-pink-400  to-orange-400 text-white"
          : active
          ? "bg-gradient-to-r from-pink-600 to-orange-500 text-white animate-pulse"
          : "bg-white/10 text-white"
      }`}
    >
      {iconComponents[icon] || <BiCheckCircle />}
    </div>
  );
}

export default function VerticalLinearStepperEg({ activeStep }) {
  return (
    <motion.Box {...fadeAnimation} className="max-w-[400px] my- sticky top-20 left-0 ">
      <Stepper activeStep={activeStep} orientation="vertical">
        {newProjectSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              StepIconComponent={(props) => (
                <CustomStepIcon {...props} icon={index + 1} />
              )}
              className={`${
                index === activeStep
                  ? "text-orange-500 font-semibold"
                  : "text-gray-400"
              }`}
              optional={
                index === newProjectSteps.length - 1 ? (
                  <Typography
                    variant="caption"
                    className="text-sm text-gray-300"
                  >
                    Last step
                  </Typography>
                ) : null
              }
            >
              <span
                className={`${
                  index === activeStep
                    ? "text-xl text-orange-400"
                    : "text-lg text-white/70"
                }`}
              >
                {step.label}
              </span>
            </StepLabel>
            <StepContent>
              <Typography className="text-sm text-white/70">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === newProjectSteps.length && (
        <Paper square elevation={0} className="p-4 bg-gray-800 text-center">
          <Typography className="text-white">
            All steps completed - you&apos;re finished!
          </Typography>
        </Paper>
      )}
    </motion.Box>
  );
}
