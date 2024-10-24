"use client";
import CustomPaginationActionsTable from "@/components/dashBoard/PaginatedTable";
import ProfileUpdate from "@/components/dashBoard/ProfileUpdate";
import { IconButton, Tooltip } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const MyProfile = () => {
  const { data: session } = useSession();
  const [appliedProjects, setAplliedProjects] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    const fetchAppliedProjects = async () => {};
    if (session?.user.id) {
      fetchAppliedProjects();
    }
  }, []);

  const exampleRows = [
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
    {
      Date: "20/7/24",
      Role: "Full-Stack",
      Company: "Google",
      Status: "Active",
    },
  ];
  return (
    <section className="mx-10">
      {showUpdateForm && (
        <ProfileUpdate setShowUpdateForm={setShowUpdateForm} />
      )}
      <div className="border shadow flex flex-col gap-6 border-white/10 rounded-[4px] py-8 my-8 px-12 max-w-[1200px] mx-auto ">
        <div className="flex gap-4 items-center w-full">
          <span className="border bg-l2/15 border-l2/20 rounded-full p-1  ">
            <Image
              src={session?.user.img}
              width={84}
              height={84}
              alt={session?.user.name.charAt(0).toUpperCase()}
              className="rounded-full"
            />
          </span>
          <div className="flex-1 flex gap-6 items-start ">
            <div>
              <p className="text-[28px] font-semibold">{session?.user.name}</p>
              <p className="text-BO">Specific ROLE</p>
            </div>
            <div className="text-3xl relative font-semibold bg-gradient-to-tl from-l2 via-orange-200 to-pink-400 text-transparent bg-clip-text">
              3.4
              <Image
                src={"/Ratingsvg.svg"}
                width={32}
                height={32}
                alt="star"
                className="absolute -top-5 left-2"
              />{" "}
            </div>
          </div>
          <Tooltip title="Edit Profile">
            <IconButton
              onClick={() => {
                setShowUpdateForm(true);
              }}
            >
              <BiEdit className="size-6 text-white" />
            </IconButton>
          </Tooltip>
        </div>
        <span className="text-l2">
          <MdAlternateEmail className="inline-flex size-7" />{" "}
          {session?.user.email}
        </span>
        <div className="max-w-2xl">
          <span className="text-md font-medium">Skills : </span>
          <div className="flex text-sm flex-wrap gap-x-4 gap-y-3 my-2">
            {session?.user?.skills?.length > 0 ? (
              session?.user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-BO/5 border border-e1/20 rounded-[24px] p-2"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </div>
        <div className="space-x-3">
          <span className="text-md font-medium">Resume : </span>
          <a className="text-l2"> resume.pdf</a>
        </div>
        <div className="max-w-2xl flex gap-x-5 gap-y-3 justify-between">
          <span className="text-md font-medium">
            Show your work/Projects for better profile or to get hired for
            project :{" "}
          </span>
          <div className="flex *:underline flex-wrap gap-x-4 gap-y-3 *:text-l2 my-1">
            <p>project01.link</p>
            <p>project01.link</p>
            <p>project01.link</p>
          </div>
        </div>
        <div className="space-y-3">
          <span className="text-md font-medium">Applied Projects :</span>
          <CustomPaginationActionsTable rows={exampleRows} />
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
