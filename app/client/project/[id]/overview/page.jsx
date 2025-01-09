import { Badge } from "@mui/material";
import Image from "next/image";
import React from "react";

const OverView = () => {
  return (
    <section className="space-y-10">
      <div className="w-full h-52 bg-BO" />
      <div>
        <h2 className="text-xl font-medium mb-6">Tasks Overview</h2>
        {/* task status progress */}
        <Card
          status="In progress"
          list={[
            {
              name: "To learn dsa",
              num_of_files: '4',
              num_of_comments: '5',
              priority: 'low',
              time_left: '2 hrs'
            },
            {
              name: "To design the frontend for real estate",
              num_of_files: '4',
              num_of_comments: '5',
              priority: 'medium',
              time_left: '2 hrs'
            },
          ]}
        />
        {/* task status pending */}
        <Card
          status="pending"
          list={[
            {
              name: "interview preparation",
              num_of_files: '4',
              num_of_comments: '5',
              priority: 'low',
              time_left: '30 days'
            },
            {
              name: "Gsoc placement",
              num_of_files: '4',
              num_of_comments: '5',
              priority: 'high',
              time_left: '2 days'
            },
          ]}
        />
        {/* task status progress */}
        <Card
          status="completed"
          list={[
            {
              name: "learning dev ",
              num_of_files: '4',
              num_of_comments: '5',
              priority: 'medium',
              time_left: '2 hrs'
            },
        
          ]}
        />
      </div>
    </section>
  );
};

const Card = ({status,list}) => {
  return (
    <div
      className={`${
        status === "pending"
          ? "bg-l1/20"
          : status === "completed"
          ? "bg-purple-900/20"
          : "bg-fuchsia-800/20"
      }  capitalize space-y-6 p-4 my-3 rounded-lg text-sm`}
    >
      <h2>
        {status}{" "}
        <span className="bg-white/10  ml-4 text-sm px-1.5 py-0.5 rounded-lg">
          {list.length}
        </span>
      </h2>
      {/* mapping */}
      <div>
      {list.map((task, i) => (
        <div className="bg-bgColor my-1 p-2 lg:p-3 rounded border border-white/15  ">
          <div className="flex items-start gap-10">
            <h3>{task.name}</h3>
            <span
              className={`${
                task.priority === "high"
                  ? "bg-red-950"
                  : task.priority === "medium"
                  ? "bg-fuchsia-900"
                  : "bg-green-900"
              } py-0.5 px-2 rounded-full text-xs `}
            >
              {task.priority}
            </span>{" "}
          </div>
          <div className="flex mt-5 gap-12 items-center *:flex *:items-center *:gap-1">
            <div className="">
              <Image src={"/Time.svg"} width={20} height={20} alt="icon" />
              <span>{task.time_left}</span>
            </div>
            <div className="bg-white/10 rounded-xl px-2.5 py-1">
              <Image src={"/link.svg"} width={18} height={18} alt="icon" />
              <span>{task.num_of_files}</span>
            </div>
            <div className="bg-white/10 rounded-xl px-2.5 py-1">
              <Image src={"/comment.svg"} width={18} height={18} alt="icon" />
              <span>{task.num_of_comments}</span>
            </div>
          </div>
        </div>
      ))}

      </div>
    </div>
  );
};

export default OverView;
