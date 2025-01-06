
import { FaStar } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import CustomSelect from "../CustomSelect";

import { TiLocation } from "react-icons/ti";
import ApplicantsDetail from "./ApplicantsDetail";

const Applicants = ({openApplicantDetailSidebar,setOpenApplicantDetailSidebar}) => {
  const { data: session } = useSession();
  console.log(session);


  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex gap-12  relative items-center">
        <span
          className={`absolute bottom-0 h-0.5 rounded-full w-44 bg-white transition-all duration-300`}
          style={{
            transform:
              activeIndex === 0 ? "translateX(0%)" : "translateX(120%)",
          }}
        ></span>

        <button
          className={`relative flex items-center gap-1.5 px-3 py-2 hover:text-white/70 ${
            activeIndex === 0 ? "text-white font-semibold" : "text-gray-400"
          }`}
          onClick={() => setActiveIndex(0)}
        >
          <Image src={"/applicants.svg"} width={18} height={18} alt="icon" />
          <span>Candidates</span>
          <span className="bg-fuchsia-900 px-2 rounded">3</span>
        </button>

        <button
          className={`relative flex items-center gap-1.5 px-3 py-2 hover:text-white/70 ${
            activeIndex === 1 ? "text-white font-semibold" : "text-gray-400"
          }`}
          onClick={() => setActiveIndex(1)}
        >
          <Image src={"/applicants.svg"} width={18} height={18} alt="icon" />
          <span>Assigned To</span>
        </button>
      </div>
      <div className="bg-fuchsia-900/15 mt-8 p-4 rounded-[10px]">
        {activeIndex === 0 ? (
          Array(3)
            .fill(null)
            .map((_, index) => <CandidateCard key={index} />)
        ) : (
          <CandidateCard />
        )}
      </div>
{
  openApplicantDetailSidebar && <ApplicantsDetail setOpenApplicantDetailSidebar={setOpenApplicantDetailSidebar} />
}


    </div>
  );
};

export default Applicants;

const CandidateCard = ({ data }) => {
  const [status, setStatus] = useState("Pending");
  return (
    <div className="flex flex-col gap-4 border border-white/30 rounded-[10px] p-4 my-2 bg-bgColor">
    <div className="flex border-white/10 pb-2 border-b gap-3 w-full  ">
      <Image
        src={data?.user.img}
        width={55}
        height={10}
        alt={data?.user.name.charAt(0)}
        className="rounded-full"
      />
      <div className="text-sm flex-1 leading-tight text-white/70">
        <p className="text-white text-[16px]">Name</p>
        <p className="">Role</p>
        <p className="text-[12.3px]">
          Appplied at{" "}
          <span className="text-white text-[14px]"> 18 Nov 2024</span>
        </p>
      </div>
      <div className="">
        <CustomSelect
          setValue={setStatus}
          value={status}
          menuItems={["Pending", "Accept", "Reject"]}
        />
      </div>
    </div>
    <div className="flex items-center gap-3 *:py-0.5 *:px-2 *:flex *:gap-1 *:items-center ">
      <span className="border rounded-full border-white/20"><FaStar className="inline-flex text-yellow-300 "/> 3.5 Overall</span>
      <span className="rounded-[5px] bg-l1/20"><TiLocation className="inline-flex "/>India</span>
    </div>

    </div>
  );
};
