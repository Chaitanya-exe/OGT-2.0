"use client";

import { projectsData } from "@/config/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import Button from "../ui/Button";
import ProjectDetail from "./ProjectDetail";

const ProjectCard = ({ project, index,setDEtailModal }) => {

  return (
    <div
      key={index}
      className="projectCard border-white/10 border rounded lg:w-[1110px]  mx-auto p-4 flex flex-col gap-4"
    >
      <div className="flex gap-3 items-center ">
        <Image
          src={"/user.png"}
          width={45}
          height={48}
          alt="comapnyLog0"
          className="rounded-full"
        />
        <div className="flex-1 overflow-hidden text-ellipsis mr-28 ">
          <h2 className="text-[20px] font-medium  ">{project.companyName}</h2>
          <h3 className="text-sm text-BO truncate">
            {project.companyNote}
          </h3>
        </div>
        <div className="flex gap-4 items-center">
          {/* <MdBookmarkAdd className="size-5" /> */}
          <Image src={"/Vector.svg"} width={12} height={12} alt="saveIcon" />
          <button
            onClick={() => setDEtailModal(true)}
            className="text-sm underline"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="border border-white/10 rounded p-1.5 flex justify-between items-center">
        <p className="capitalize font-medium">{project.role}</p>
        <p>{project.stipend} Project</p>
        <p>TimeDeadline - {project.timeline}</p>
      </div>
      <div>
        Skills - <span className=" text-sm ">{project.skills.join(" , ")}</span>
      </div>
      <ul className="bg-l1 w-fit list-disc list-inside px-2 rounded-full text-sm">
        <li>{project.status}</li>
      </ul>
      <span className="text-sm text-BO">{project.applicants}+ applicants</span>
      <button>
        <Button text="Apply" type="primary" className="w-[140px] float-right" />
      </button>
    </div>
  );
};

const Projects = () => {
        const [openDetailModal, setDEtailModal] = useState(false);

  const fetchProjects = () => {};

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="flex flex-col gap-2 p-12">
    
      {projectsData.map((project, index) => (
        <>

         {
        openDetailModal && <ProjectDetail project={project} setDEtailModal={setDEtailModal} />
    }
        <ProjectCard project={project} index={index} setDEtailModal={setDEtailModal}/>
        </>
      ))}
    </section>
  );
};

export default Projects;
