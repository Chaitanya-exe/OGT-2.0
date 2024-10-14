"use client";

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../ui/Button";

const ProjectDetail = ({ project,setDEtailModal }) => {
  return (
    <div className="z-10 flex items-end justify-center top-0 w-full h-full bg-black/20 left-0 fixed">
      <div className="w-[1400px] rounded-t-[30px] h-[75vh] overflow-y-scroll text-bgColor bg-white ">
        <IoCloseOutline onClick={()=> setDEtailModal(false)} className="text-bgColor cursor-pointer float-right size-7 m-3" />
        <div className="flex justify-between gap-28 py-10  px-16">
          <div className="">
            <h2 className="text-[28px] capitalize">{project.role}</h2>
            <div className="space-x-4 mb-7 text-bgColor/80">
              <span>{project.applicants} applicants</span>
              <span>{project.stipend} project</span>
            </div>
            <h2 className=" text-2xl font-medium my-5">Project Description</h2>
            <h3 className="font-medium my-2 max-w-3xl">
              Description : <span className="text-bgColor/80">{project.companyNote}</span>
            </h3>
            <h3 className="font-medium my-2">
              Requirements : <ul className="text-bgColor/80 list-disc list-inside mx-10">
              {project.requirements.map((point)=> (
                <li>{point}</li>

              ))}
              </ul>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Skills : <span className="text-bgColor/80">{project.skills.join( " , ")}</span>
            </h3>
            <h3 className="font-medium my-2">
              Status : <span className="text-bgColor/80">{project.status}</span>
            </h3>
            <h3 className="font-medium my-2">
              Posted on : <span className="text-bgColor/80">{project.postedOn}</span>
            </h3>
          </div>
          <div className="px-16">
            <Button
              type="primary"
              text="Apply"
              className="w-[130px] text-white"
            />
          </div>
        </div>
      </div>
     </div>
  );
};

export default ProjectDetail;
