"use client";
import Applicants from "@/components/projectDashboard/Applicants";
import ApplicantsDetail from "@/components/projectDashboard/ApplicantsDetail";
import Overview from "@/components/projectDashboard/Overview";
import { Avatar, Chip, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { BiSolidWidget, BiUser } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";

const Page = () => {
  const { id } = useParams();
  const decodedId = id ? decodeURIComponent(id) : "";
  const [breadCumb, setBreadCumb] = useState("OverView");
  const [openApplicantDetailSidebar, setOpenApplicantDetailSidebar] =
    useState(false);

  const renderingData = () => {
    switch (breadCumb) {
      case "Applicants":
        return (
          <Applicants
            openApplicantDetailSidebar={openApplicantDetailSidebar}
            setOpenApplicantDetailSidebar={setOpenApplicantDetailSidebar}
          />
        );
      case "OverView":
        return <Overview />;
    }
  };

  return (
    <div className="relative">
      {/* top */}
      <div className="fixed px-28 top-0 w-full border-b flex items-center gap-2 border-white/20 py-4">
        <IoIosArrowBack />
        <span className="capitalize font-semibold text-lg text-white/70">
          Project / {decodedId} {breadCumb !== "" ? `/ ${breadCumb}` : ""}
        </span>
      </div>

      {/* left sidebar */}
      <div className="flex ">
        <div className="flex flex-col items-center bg-bgColor z-10 w-fit gap-6 py-4 px-2 border-white/20 border-r sticky left-0 min-h-screen bottom-0">
          <Image src="/logo.png" width={70} height={70} alt="logo" />
          <div className="pt-4 flex flex-col gap-10  ">
            <Tooltip title="Overview">
              <IconButton onClick={() => setBreadCumb("OverView")}>
                <BiSolidWidget
                  className={`${
                    breadCumb === "OverView"
                      ? "text-white/100 border-b-2 pb-1 border-fuchsia-800"
                      : "text-white/70"
                  } hover:text-white/70 size-7`}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Progress">
              <IconButton onClick={() => setBreadCumb("Progress")}>
                <Image
                  src="/Task.svg"
                  width={25}
                  height={25}
                  alt="logo"
                  className={`${
                    breadCumb === "Progress"
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70 `}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Files">
              <IconButton onClick={() => setBreadCumb("Files")}>
                <Image
                  src="/files.svg"
                  width={22}
                  height={22}
                  alt="logo"
                  className={`${
                    breadCumb === "Files"
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70 `}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="AI Suggestions">
              <IconButton onClick={() => setBreadCumb("AI Suggestions")}>
                <Image
                  src="/ai.svg"
                  width={22}
                  height={22}
                  alt="logo"
                  className={`${
                    breadCumb === "AI Suggestions"
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70`}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Applicants">
              <IconButton onClick={() => setBreadCumb("Applicants")}>
                <BiUser
                  className={`${
                    breadCumb === "Applicants"
                      ? "text-white/100 border-b-2 pb-1 border-fuchsia-800"
                      : "text-white/70"
                  } hover:text-white/70  size-7`}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        <div className="mt-28 w-full lg:px-48 md:24">{renderingData()}</div>
      </div>

      {/* right information */}
      {breadCumb !== "Applicants" && (
        <div className="fixed right-0 bg-green-500/10 w-fit top-0 py-20 min-h-screen border-l border-white/20">
          <h2>Assigned To:</h2>
          <Chip label="Active" color="primary" />
          <div className="flex items-start gap-2">
            <Avatar
              alt="Remy Sharp"
              // src="/static/images/avatar/1.jpg"
            >
              R
            </Avatar>
            <div className="flex-1 pr-5">
              <h3 className="text-sm">Rashmi Punia</h3>
              <h3>Frontend Developer | Product Manager</h3>
            </div>
            <IconButton
              onClick={() => setOpenApplicantDetailSidebar(true)}
              className="text-white text-sm"
            >
              View
            </IconButton>
          </div>
          <div>
            <IconButton>
              <Image
                src={"/calender.svg"}
                width={20}
                height={20}
                alt="calender"
              />
            </IconButton>
            <div className="text-cente">
            <div className="">

              <h4>Start Date</h4>
              <span>2/12/2024</span>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* ApplicantsDetail */}
      {openApplicantDetailSidebar && (
        <ApplicantsDetail
          setOpenApplicantDetailSidebar={setOpenApplicantDetailSidebar}
        />
      )}
    </div>
  );
};

export default Page;
