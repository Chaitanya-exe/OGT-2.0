"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import ProjectDetail from "./ProjectDetail";
import { usePathname, useSearchParams } from "next/navigation";
import axios from "axios"
import { Alert, Snackbar } from "@mui/material";

export const ProjectCard = ({ project, index, setDEtailModal ,className}) => {
  const pathname = usePathname();

   const [open, setOpen] = React.useState(false);

   const handleClick = () => {
     setOpen(true);
   };

   const handleClose = (event, reason) => {
     if (reason === "clickaway") {
       return;
     }

     setOpen(false);
   };

  return (
    <div
      key={index}
      className={` ${className} mx-auto p-4 flex flex-col gap-4`}
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
          <h3 className="text-sm text-BO truncate">{project.companyNote}</h3>
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
        <p>{project.stipend} $ Project</p>
        <p>TimeDeadline - {project.timeline}</p>
      </div>
      <div>
        Skills - <span className=" text-sm ">{project.skills.join(" , ")}</span>
      </div>
      <ul className="bg-l1 w-fit list-disc list-inside capitalize px-2 rounded-full text-sm">
        <li>{project.status}</li>
      </ul>
      <span className="text-sm text-BO">{project.applicants}+ applicants</span>
{
  !pathname === "/developer/profile" && (

      <button onClick={handleClick}>
        <Button text="Apply" type="primary" className="w-[140px] float-right" />
      </button>
  )
}
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This is a success Alert inside a Snackbar!
          </Alert>
        </Snackbar> */}
    </div>
  );
};

const Projects = () => {
  const [openDetailModal, setDEtailModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const stipend = searchParams.get("stipend");


  console.log(projects,category,stipend);

  const fetchProjects = async () => {
    try {
      const {data} = await axios.get("/api/projects",{params : {category,stipend}});
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects in ", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [category,stipend,searchParams]);

  if(projects.length == 0){
    return  <p className="text-center py-16 text-l2 text-3xl">No projects Found</p>
  }

  return (
    <section className="flex flex-col gap-2 p-12">
      {projects.map((project, index) => (
        <>
          {openDetailModal && (
            <ProjectDetail project={project} setDEtailModal={setDEtailModal} />
          )}
          <ProjectCard
            project={project}
            index={index}
            setDEtailModal={setDEtailModal}
            className="projectCard border-white/10 border rounded lg:w-[1110px]"
          />
        </>
      ))}
    </section>
  );
};

export default Projects;
