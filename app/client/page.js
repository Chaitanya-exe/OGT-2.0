"use client";

import TemporaryDrawer from "@/components/dashBoard/Drawer";
import ProjectsList from "@/components/ProjectsList";
import Searchcategory from "@/components/search/SearchBar";
import Button from "@/components/ui/Button";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EmployerPage = () => {
  const [active, setActive] = useState("/myProfile");
  const router = useRouter();

  return (
    <div className="flex gap-2 ">
      <TemporaryDrawer active={active} setActive={setActive} />
      <div className="flex-1 p-12 mx-24 ">
        <div className="w-full bg-l2/5 p-16">Add section</div>
        <div className="flex justify-between">
          {/* <Searchcategory /> */}
          <p>filters</p>
          <button
            onClick={() => {
              router.push("/client/project/new");
            }}
          >
            <Button
              text="+ New Project"
              type={"primary"}
              className={"w-[140px]"}
            />
          </button>
        </div>
        <ProjectsList />
      </div>
    </div>
  );
};

export default EmployerPage;
