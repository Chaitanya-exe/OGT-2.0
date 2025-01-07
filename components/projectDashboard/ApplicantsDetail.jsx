import { IconButton } from '@mui/material';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const ApplicantsDetail = ({setOpenApplicantDetailSidebar}) => {
      const { data: session } = useSession();
  return (
    <div className="sidebar fixed overflow-y-scroll text-bgColor py-2 *:px-4 *:py-3 right-0 top-0 bottom-0 lg:w-[900px] rounded-tl-[26px] bg-white">
      <div className="flex items-center ">
        <span className="rounded-full border border-bgColor/30 mr-2">
          <IconButton>
            <IoIosArrowBack />
          </IconButton>
        </span>
        <span className="rounded-full border border-bgColor/30 mr-2">
          <IconButton>
            <IoIosArrowForward />
          </IconButton>
        </span>

        <p className="text-bgColor/70 flex-1">1 out of 30</p>
        <IconButton onClick={()=> setOpenApplicantDetailSidebar(false)}  >
          <IoClose  className="size-6" />
        </IconButton>
      </div>
      <div className="flex items-center gap-3 border-t border-b">
        <Image
          src={session?.user.image}
          width={130}
          height={130}
          alt="NN"
          className="border rounded-full"
        />
        <div className="flex flex-col gap-4  capitalize *:flex  *:items-center *:gap-5">
          <div>
            <div>
              <span className="font-semibold text-[19px]">Name</span>
              <p className="text-bgColor/70">Role</p>
            </div>
            <span className="border rounded-full border-bgColor/20 p-2">
              <FaStar className="inline-flex text-yellow-300 " /> 3.5 Overall
            </span>
            <div className="*:px-3 p- flex justify-center w-[180px] rounded-full text-white">
              <select
                name="dropdown"
                defaultValue=""
                value={"hj"}
                // onChange={handleChange}
                id="demo-simple-select"
                className="bg-green-700 p-2 mb-2 focus:outline-none *:bg-white  w-[180px] rounded-full text-white *:text-bgColor"
              >
                <option
                  // value={query.type}
                  // onChange={(e) =>
                  //   setQuery({ ...query, type: e.target.value.toUpper() })
                  // }
                  disabled
                  hidden
                  className="text-white/20"
                >
                  Status
                </option>
                <option value={"Pending"} className="hover:bg-slate-300">
                  Pending
                </option>
                <option value={"Accept"}>Accept</option>
                <option value={"Reject"}>Reject</option>
              </select>
            </div>
          </div>
          <div className="space-x-8">
            <div>
              <span className="text-sm">Applied at</span>
              <p className="font-semibold">24 oct 2024</p>
            </div>
            <div>
              <span className="text-sm">Origin</span>
              <p className="font-semibold">India</p>
            </div>
            <div>
              <span className="text-sm">Birthday</span>
              <p className="font-semibold">24 oc0t 2004</p>
            </div>
            <div>
              <span className="text-sm">gender</span>
              <p className="font-semibold">female</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bgColor/15 h-full">
        <div className="flex items-center gap-3 mt-1 *:rounded-md *:py-1.5 *:px-2.5">
          <button className="bg-bgColor text-white">Form Submission </button>
          <button className="border border-bgColor hover:bg-bgColor hover:text-white">
            Resume{" "}
          </button>
        </div>
        <div className="flex flex-col gap-2 *:shadow-md *:rounded my-8  *:bg-white *:p-2">
          <div className="flex items-start gap-3 font-medium">
            <span className="border rounded-full px-4 py-2 text-center content-center">
              1
            </span>
            <div>
              <h3 className="text-sm text-bgColor/60">
                To design the UI for project management
              </h3>
              <h3>
                To design the UI for project management in the future to do.
              </h3>
            </div>
          </div>
          <div className="flex items-start gap-3 font-medium">
            <span className="border rounded-full px-4 py-2 text-center content-center">
              1
            </span>
            <div>
              <h3 className="text-sm text-bgColor/60">
                To design the UI for project management
              </h3>
              <h3>
                To design the UI for project management in the future to do.
              </h3>
            </div>
          </div>
          <div className="flex items-start gap-3 font-medium">
            <span className="border rounded-full px-4 py-2 text-center content-center">
              1
            </span>
            <div>
              <h3 className="text-sm text-bgColor/60">
                To design the UI for project management
              </h3>
              <h3>
                To design the UI for project management in the future to do.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicantsDetail
