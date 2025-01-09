"use clinet";
import { projectsData } from "@/config/constants";
import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
import TippyUi from "./ui/Tippy";
import { RiProgress3Line } from "react-icons/ri";
import { BiEdit, BiUserCircle } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import Link from "next/link";

const ProjectsList = () => {
  const [rows, setRows] = useState([]);

  return (
    <div className="border rounded border-white/20 p-3">
      <table className="min-w-full  bg-bgColor border-collapse">
        <thead>
          <tr className="w-full *:mx-2 *:text-start *:py-3 border-b-2 border-white/20 ">
            <th>Role</th>
            <th>Status</th>
            <th className="">Notifications</th>
            <th>Posted On</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((row) => (
            <tr
              key={row.role}
              className="hover:bg-BO/ *:py-4 capitalize  

               
              *:text-sm *:text-BO *:border-b *:border-white/20"
            >
              <td>
                {row.role}
                <Link href={`/client/project/${row.role}/overview`}>/^////</Link>
              </td>
              <td>
                <ul className="bg-l1 w-fit list-disc list-inside capitalize px-2 rounded-full text-sm">
                  <li>{row.status}</li>
                </ul>
              </td>
              <td className="px-10">
                <Badge badgeContent={4} color="secondary" variant="dot">
                  <Image
                    src={"/Notification.svg"}
                    width={20}
                    height={20}
                    alt="bell"
                  />
                </Badge>
              </td>
              <td>{row.postedOn}</td>
              <td className="px-7">
                <TippyUi
                  istrigger="click"
                  position="right"
                  content={
                    <div className="bg-l2/10 backdrop-blur-xl *:flex *:w-full *:items-center *:gap-1 w-[175px] shadow capitalize border border-white/10 text-start  *:p-2  rounded ">
                      <Link
                        href={`/client/project/${row.role}/applicants`}
                        className="hover:text-white hover:bg-l2/30"
                      >
                        <BiUserCircle className="size-6" />{" "}
                        <p>See Applicants</p>
                      </Link>
                      <Link
                        href={`/client/project/${row.role}/progress`}
                        className="hover:text-white  hover:bg-l2/30"
                      >
                        <RiProgress3Line className="inline-flex size-6" />{" "}
                        <p>Progress</p>
                      </Link>
                      <TippyUi
                        position="left-start"
                        content={
                          <div className="bg-l2/10 backdrop-blur-xl min-w-36 ml-6 shadow capitalize border border-white/10 text-start  *:p-2  rounded ">
                            <p className="hover:text-white hover:bg-l2/30">
                              Active
                            </p>
                            <p className="hover:text-white hover:bg-l2/30">
                              InActive
                            </p>
                          </div>
                        }
                      >
                        <span className="hover:text-white  hover:bg-l2/30">
                          <RxUpdate className="inline-flex size-6" />{" "}
                          <p>Update Status</p>
                        </span>
                      </TippyUi>
                      <span className="hover:text-white  hover:bg-l2/30">
                        <BiEdit className="inline-flex size-6" /> <p>Edit</p>
                      </span>
                      <span className="hover:text-white  hover:bg-l2/30">
                        <MdDelete className="inline-flex size-6" />{" "}
                        <p>Delete</p>
                      </span>
                    </div>
                  }
                >
                  <button>
                    <CiMenuKebab className="" />
                  </button>
                </TippyUi>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default ProjectsList;
