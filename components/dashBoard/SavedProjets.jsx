"use client";
import React, { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { ProjectCard } from "../search/Projects";
import { projectsData } from "@/config/constants";
import ProjectDetail from "../search/ProjectDetail";
import { Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Searchcategory from "../search/SearchBar";
import CustomSelect from "../CustomSelect";

const SavedProjets = () => {
  const [openDetailModal, setDEtailModal] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div className=" pb-8 overflow-hidden ">
      <div className="relative  flex z-20 h-full justify-end gap-4 items-center mr-10 py-8">
        <AnimatePresence>
          {filterVisible && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "70%", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-4 h-fit flex items-center relative z-50 "
            >
              <div className="flex gap-16 items-center">
                <Searchcategory className="p-4  pl-12 bg-transparent rounded border focus:outline-none text-sm border-white/10 mr-3" />

                <CustomSelect value={"All"} menuItems={["All", "Active"]} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Tooltip title="Filters">
          <span onClick={toggleFilter} className="cursor-pointer">
            <FaFilter className="size-" />
          </span>
        </Tooltip>
      </div>
      <div className="flex flex-col relative  gap-3  w-full">
        {projectsData.map((project, index) => (
          <>
            {openDetailModal && (
              <ProjectDetail
                project={project}
                setDEtailModal={setDEtailModal}
              />
            )}
            <ProjectCard
              project={project}
              index={index}
              setDEtailModal={setDEtailModal}
              className="bg-bgColor max-w-[800px] rounded-md  hover:shadow-[0px_2px_30px_#203752] border hover:border-none hadow shadow-l2/15 border-white/10"
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SavedProjets;
