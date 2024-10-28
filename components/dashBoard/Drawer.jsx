"use client";

import * as React from "react";

import Divider from "@mui/material/Divider";
import { IoCloseOutline } from "react-icons/io5";
import { developerDashBoard } from "@/config/constants";
import Image from "next/image";
import { signOut } from "next-auth/react";

export default function TemporaryDrawer({ active, setActive }) {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div
      className="w-[300px] px-1.5 relative h-full"
      onClick={toggleDrawer(false)}
    >
      <div className="absolute -bottom-10 -left-3 w-[230px] h-[220px] bg-gradient-to-tr from-purple-500/20  blur-2xl -z-20 rounded-full" />
      <div className="flex justify-between items-center p-3 my-2">
        <h1 className="ogt-logo">Ogt</h1>

        <IoCloseOutline
          onClick={() => setOpen(false)}
          className="cursor-pointer hover:scale-90 size-8  hover:bg-gradient-to-bl  from-white/30 to-BO/15 text-white hover:border border-bgColor rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2.5 capitalize">
        {developerDashBoard.map((tab, index) => (
          <button
            onClick={() => setActive(tab.link)}
            key={tab.id}
            className={` ${
              active === tab.link
                ? "bg-gradient-to-r from-l2/40 to-bgColor/25 border border-white/20"
                : "text-white/70"
            } flex gap-2 rounded items-center hover:bg-bgColor/60 px-1.5 py-2 text-sm capitalize`}
          >
            {tab.icon ? (
              <span>{tab.icon}</span>
            ) : (
              <Image
                src={tab.svg}
                width={22}
                height={22}
                alt="svg"
                className=""
              />
            )}
            <p>{tab.name}</p>{" "}
          </button>
        ))}
      </div>
      <Divider className="bg-white/20 my-4" />

      <button
        onClick={() => signOut()}
        className=" rounded w-full text-start hover:bg-bgColor/60 px-1.5 py-3"
      >
        Sign Out
      </button>
    </div>
  );

  return (
    <div className="bg-l2/5 sticky h-screen overflow-hidden backdrop-blur-lg top-0 ">
      {DrawerList}
    </div>
  );
}
