"use client";
import AppliedProjects from "@/components/dashBoard/AppliedProjects";
import TemporaryDrawer from "@/components/dashBoard/Drawer";
import MyProfile from "@/components/dashBoard/MyProfilePage";
import SavedProjets from "@/components/dashBoard/SavedProjets";
import WorkingProjects from "@/components/dashBoard/WorkingProjects";
import { Divider } from "@mui/material";
import React, { useState } from "react";

const DeveloperProfile = () => {
  const [active, setActive] = useState("workingProjects");
  const renderComponent = () => {
    switch (active) {
      case "myProfile":
        return <MyProfile />;
      case "appliedProjects":
        return <AppliedProjects />
      case "savedProjects":
        return <SavedProjets />
      case "workingProjects":
        return <WorkingProjects />
      case "reviews":
        return <p>your reviews here</p>;
      case "payments":
        return <p>payments ui</p>;
      case "help":
        return <p>help</p>;
    }
  };

  return (
    <div className="flex gap-2 ">
      <TemporaryDrawer active={active} setActive={setActive} />
      <div className="bg-l2/5 my-[1.5rem] rounded-md lg:min-w-[1000px] mx-auto ">
        <h2 className="mx-10 pt-4 h3Video">{active}</h2>
        <Divider className="mt-3 bg-bgColor p-[1px] rounded w-full" />
        {renderComponent()}
      </div>
    </div>
  );
};

export default DeveloperProfile;
