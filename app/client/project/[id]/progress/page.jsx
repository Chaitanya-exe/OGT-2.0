"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useState } from "react";
import Chart from "react-google-charts";

const data = [
  ["Completion", "Percent"],

  ["Complete", 80],
  ["In Progress", 20],
  ["Pending", 40],
];

const options = {
  title: "Project Completion Chart",
  is3D: true,
  backgroundColor: "transparent",
  titleTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    position: "center",
  },
  // slices: {
  //   0: { color: "#984DD8" }, // Green for "Complete"
  //   1: { color: "#F44336" }, // Red for "Incomplete"
  // },
  legend: {
    position: "bottom",
    textStyle: { color: "#FFFFFF", fontSize: 12 },
  },
  pieSliceTextStyle: {
    color: "#FFFFFF",
  },
};

const Progress = () => {
  const [currentTab, setCurrentTab] = useState("View All");

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleNewTask = () => {};

  return (
    <section className="space-y-12">
      {/* showcase chart */}
      <div className="capitalize flex gap-10 justify-center ">
        <div className="space-y-1.5 *:rounded-lg">
          <div className="text-center bg-gradient-to-br drop-shadow-xl from-orange-500 to-l2 py-10 px-12 ">
            <span className="text-[56px] font-bold">76%</span>
            <span> Completed</span>
          </div>
          <div className="bg-gradient-to-r  drop-shadow-xl from-l2/10 to-l2 py-3 px-8  ">
            <p className="text-lg text-orange-400 font-bold">
              <span>Total tasks :</span>
              <span className="text-white">{""} 5</span>
            </p>
            <p className="text-lg  text-orange-400 font-bold">
              <span>Project Phase :</span>
              <span className="text-white">{""} Developement</span>
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600  to-fuchsia-500 rounded-lg">
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"250px"}
          />
        </div>
      </div>
      {/* butttons */}
      <div className="flex gap-28 *:flex *:gap-4 *:items-center">
        <div className="flex gap-2 cursor-pointer border-white/10 *:p-2 capitalize flex-1 border-b *:text-sm font-medium ">
          {["View All", "Completed", "Progress", "Pending"].map((tab, i) => (
            <span
              key={i}
              onClick={() => handleTabClick(tab)}
              className={`${
                currentTab === tab ? "font-bold border-b" : "text-white/70"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div>
          <button onClick={() => handleNewTask()}>
            <Button
              type={"primary"}
              text={"new task"}
              className={"primary_gra w-[120px] capitalize"}
            />
          </button>
        </div>
      </div>

      {/* tasks cards */}

      <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            name: "To learn dsa",
            desc: "To design the UI for project management",
            num_of_files: "4",
            num_of_comments: "5",
            priority: "low",
            due_date: " Nov 15, 2024",
            status: 'in progress'
          },
          {
            name: "To design the frontend for real estate",
            desc: "To design the UI for project management",
            num_of_files: "4",
            num_of_comments: "5",
            priority: "medium",
            due_date: " Nov 15, 2024",
            status:'completed'
          },
          {
            name: "To design the frontend for real estate",
            desc: "To design the UI for project management",
            num_of_files: "4",
            num_of_comments: "5",
            priority: "medium",
            due_date: " Nov 15, 2024",
            status:'completed'
          },
        ].map((task, i) => (
          <TaskCard task={task} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Progress;

const TaskCard = ({ task, key }) => {
  return (
    <div class="relative text-wrap capitalize min-h-[180px] shadow-lg box_shadow p-[0.5px] border border-white/10 hover:shadow-xl  rounded-lg hover:bg-gradient-to-r from-bgColor via-white/60 to-bgColor transition-all duration-300">
      <div class="text-sm bg-bgColor rounded-lg p-4 h-full w-full">
        <h1 class="font-bold text-lg">{task.name}</h1>
        <h3 class="text-white/80 my-1">{task.desc}</h3>
        <div className="flex text-xs mt-2 gap-4 justify-between items-center *:flex *:items-center *:gap-1">
          <div className="">
            <span>📅{task.due_date}</span>
          </div>
          <div className="bg-green-700/35 rounded-xl px-2.5 py-1">
            <span>{task.priority}</span>
          </div>
          <div className="bg-fuchsia-800/30 rounded-xl px-2.5 py-1">
            <span>🚧{task.status}</span>
          </div>
        </div>
        <div className="flex mt-8 gap-5 items-center *:flex *:items-center *:gap-1">
          <div className="">
            <Image src={"/svg/Time.svg"} width={20} height={20} alt="icon" />
            <span>{task.due_date}</span>
          </div>
          <div className="bg-white/10 rounded-xl px-2.5 py-1">
            <Image src={"/svg/link.svg"} width={18} height={18} alt="icon" />
            <span>{task.num_of_files}</span>
          </div>
          <div className="bg-white/10 rounded-xl px-2.5 py-1">
            <Image src={"/svg/comment.svg"} width={18} height={18} alt="icon" />
            <span>{task.num_of_comments}</span>
          </div>
        </div>
        <div className="flex mt-8 gap-5 items-center *:flex *:items-center *:gap-1">
          
        </div>
      </div>
    </div>
  );
};
