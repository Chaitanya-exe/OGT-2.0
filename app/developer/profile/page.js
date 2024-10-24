"use client";
import TemporaryDrawer from "@/components/dashBoard/Drawer";
import MyProfile from "@/components/dashBoard/MyProfilePage";
import { Divider } from "@mui/material";
import React, { useState } from "react";

const DeveloperProfile = () => {
  const [active, setActive] = useState("myProfile");
  const renderComponent = () => {
    switch (active) {
      case "myProfile":
        return <MyProfile />;
      case "appliedProjects":
        return <p>Applied projects</p>;
      case "savedProjects":
        return <p>saved projects</p>;
      case "workingProjects":
        return <p>working projects</p>;
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
      <div className="bg-l2/5 my-[1.5rem] rounded-md flex- mx-14 ">
        <h2 className="mx-10 pt-4 h3Video">{active}</h2>
        <Divider className="my-3 bg-bgColor p-[1px] rounded w-full" />
        {renderComponent()}
      </div>
    </div>
  );
};

export default DeveloperProfile;
