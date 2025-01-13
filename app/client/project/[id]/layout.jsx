"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Applicants from "./applicants/page";
import OverView from "./overview/page";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { Avatar, capitalize, Chip, IconButton, Tooltip } from "@mui/material";
import { BiSolidWidget, BiUser } from "react-icons/bi";
import Chart from "react-google-charts";
import ApplicantsDetail from "@/components/projectDashboard/ApplicantsDetail";

const data = [
  ["Completion", "Percent"],

  ["Complete", 80],
  ["InComplete", 20],
];

const options = {
  title: "Project Completion Chart",
  // is3D: true,
  backgroundColor: "transparent",
  titleTextStyle: {
    color: "#FFFFFF",
    fontSize: 16,
    position: "center",
  },
  slices: {
    0: { color: "#984DD8" }, // Green for "Complete"
    1: { color: "#F44336" }, // Red for "Incomplete"
  },
  legend: {
    position: "bottom",
    textStyle: { color: "#FFFFFF", fontSize: 12 },
  },
  pieSliceTextStyle: {
    color: "#FFFFFF",
  },
};

const Layout = (props) => {
  const { children } = props;
  const Router = useRouter();
  const { id } = useParams();
  const decodedId = id ? decodeURIComponent(id) : "";
  const PathName = usePathname();
  const path = `/client/project/${id}`;

  const [breadCumb, setBreadCumb] = useState("Overview");
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
        return <OverView />;
    }
  };

  const handleOnClick = (link) => {
    Router.push(`${path}/${link}`);
    setBreadCumb(capitalize(link));
  };

  return (
    <div className="relative">
      {/* top */}
      <div className="fixed z-10 bg-bgColor px-28 top-0 w-full border-b flex items-center gap-2 border-white/20 py-4">
        <IoIosArrowBack onClick={() => Router.push('/client')} />
        <span className="capitalize font-semibold text-lg text-white/70">
          Project / {decodedId} {breadCumb !== "" ? `/ ${breadCumb}` : ""}
        </span>
      </div>

      <div className="flex ">
        {/* left sidebar */}
        <div className="fixed flex flex-col items-center bg-bgColor z-10 w-fit gap-6 py-4 px-2 border-white/20 border-r min-h-screen">
          <Image src="/images/logo.png" width={70} height={70} alt="logo" />
          <div className="pt-4 flex flex-col gap-10  ">
            <Tooltip title="Overview">
              <IconButton
                onClick={() => handleOnClick('overview') }
              >
                <BiSolidWidget
                  className={`${
                    PathName === `${path}/overview`
                      ? "text-white/100 border-b-2 pb-1 border-fuchsia-800"
                      : "text-white/70"
                  } hover:text-white/70 size-7`}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Progress">
              <IconButton onClick={() => handleOnClick("progress")}>
                <Image
                  src="/svg/Task.svg"
                  width={25}
                  height={25}
                  alt="logo"
                  className={`${
                    PathName === `${path}/progress`
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70 `}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Files">
              <IconButton onClick={() => handleOnClick("files")}>
                <Image
                  src="/svg/files.svg"
                  width={22}
                  height={22}
                  alt="logo"
                  className={`${
                   PathName === `${path}/files`
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70 `}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="AI Suggestions">
              <IconButton onClick={() => handleOnClick("aiSuggestions")}>
                <Image
                  src="/svg/ai.svg"
                  width={22}
                  height={22}
                  alt="logo"
                  className={`${
                   PathName === `${path}/aiSuggestions`
                      ? "opacity-100 border-b-2 pb-1 border-fuchsia-800"
                      : "opacity-70"
                  } hover:opacity-70`}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Applicants">
              <IconButton onClick={() => handleOnClick("applicants")}>
                <BiUser
                  className={`${
                   PathName === `${path}/applicants`
                      ? "text-white/100 border-b-2 pb-1 border-fuchsia-800"
                      : "text-white/70"
                  } hover:text-white/70  size-7`}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>

        {/* middle render */}
        <main className="w-full my-16 mx-32 lg:max-w-[50vw] lg:mx-52 md:max-w-[60vw] pt-12">{children}</main>

        {/* <div className="mt-28 w-full lg:px-48 md:24">{renderingData()}</div> */}

        {/* right information */}
        {breadCumb !== "Applicants" && (
          <div className="fixed px-4 *:py-3 mt-12 right-0 bg-green-500/10 w-[25vw] py-20 min-h-screen border-l border-white/20">
            <Chip label="Active" color="secondary" />
            <h2 className="font-medium">Assigned To :</h2>
            <div className="flex  items-start gap-2">
              <Avatar
                alt="Remy Sharp"
                // src="/static/images/avatar/1.jpg"
              >
                R
              </Avatar>
              <div className="flex-1 pr-5">
                <h3 className="">Rashmi Punia</h3>
                <h3 className="text-sm text-white/70">
                  Frontend Developer | Product Manager
                </h3>
              </div>
              <IconButton
                onClick={() => setOpenApplicantDetailSidebar(true)}
                className="text-white/80 hover:text-white text-xs hover:underline underline-offset-2"
              >
                View Profile
              </IconButton>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-end">
                <div className="flex items-center">
                  <IconButton>
                    <Image
                      src={"/svg/calender.svg"}
                      width={20}
                      height={20}
                      alt="calender"
                    />
                  </IconButton>
                  <h4>Start Date</h4>
                </div>
                <span className="text-white/70 text-sm">2/12/2024</span>
              </div>
              <div className="text-end">
                <div className="flex items-center">
                  <IconButton>
                    <Image
                      src={"/svg/calender.svg"}
                      width={20}
                      height={20}
                      alt="calender"
                    />
                  </IconButton>
                  <h4>End Date</h4>
                </div>
                <span className="text-sm text-white/70">2/12/2024</span>
              </div>
            </div>

            <div>2 days left</div>
            <div className="flex items-center justify-center">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"90%"}
                height={"250px"}
              />
            </div>
          </div>
        )}
      </div>

      {/* ApplicantsDetail */}
      {openApplicantDetailSidebar && (
        <ApplicantsDetail
          setOpenApplicantDetailSidebar={setOpenApplicantDetailSidebar}
        />
      )}
    </div>
  );
};

export default Layout;
