"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { newProjectSteps } from "@/config/constants";

export default function VerticalLinearStepper({activeStep}) {
  return (
    <Box className="max-w-[400px] my-8">
      <Stepper activeStep={activeStep} orientation="vertical">
        {newProjectSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === newProjectSteps.length - 1 ? (
                  <Typography
                    variant="caption"
                    className="text-sm text-white/80"
                  >
                    Last step
                  </Typography>
                ) : null
              }
            >
              <span
                className={`${
                  index === activeStep
                    ? "text-xl font-semibold text-orange-400"
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
          <Typography>
            All newProjectSteps completed - you&apos;re finished
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
