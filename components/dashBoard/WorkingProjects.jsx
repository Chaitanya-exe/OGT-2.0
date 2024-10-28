import { Badge, Tooltip } from "@mui/material";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion"
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

export const Show = ({ progress }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ originX: 0, originY: 1 }}
      className="flex gap-4 justify-between"
    >
      <div className="flex flex-1 flex-col gap-1">
        <p className="capitalize font-medium text-[23px]">Cyber Security</p>

        <h3 className="text-sm  text-BO truncate">
          This is a real-world problem based project{" "}
        </h3>
        <p className="capitalize font-medium text-[18px]">30$ project</p>
        <ul className="bg-l1 my-3 w-fit list-disc list-inside px-2 capitalize rounded-full text-sm">
          <li>status</li>
        </ul>
      </div>
      <div className="flex flex-col gap-6 items-end">
        <div className="flex flex-wrap gap-14">
          <div>
            <Tooltip title="Notification">
              <Badge color="secondary" variant="dot">
                <Image
                  src={"/Notification.svg"}
                  width={20}
                  height={23}
                  alt="notifications"
                  className=""
                />
              </Badge>
            </Tooltip>
          </div>
          <div className="flex items-center gap-1 h-fit">
            <Image
              src={"/Time.svg"}
              width={26}
              height={26}
              alt="timeline"
              className=" "
            />
            <p>
              2 days <span className="text-white/60">Left</span>
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center ">
          <div className="relative  w-36 h-1 rounded bg-white/70 dark:bg-white/70">
            <div
              className="absolute top-0 left-0 h-full rounded bg-pink-500 dark:bg-pink-600"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p>
            {progress}% <span className="text-white/60">Completed</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WorkingProjects = () => {
  return (
    <div className="p-10 relative *:bg-bgColor flex flex-col gap-3 *:px-5 *:py-6 *:rounded ">
      <Show progress={40} />
      <Show progress={60} />
    </div>
  );
};

export default WorkingProjects;
