"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex gap-3 flex-col items-center justify-center min-h-[500px] text-center">
      <Image src={"/images/NotFound.png"} alt="nan" width={400} height={300} />
      <div className=" *:p-3">
        <p className="text-[32px] font-medium">Error: 404 , Not Found</p>
        <button
          onClick={() => router.back()}
          className=" rounded text-lg"
        >
          <IoArrowBackCircleOutline className="inline-flex size-7 hover:bg-BO rounded-full hover:text-bgColor items-center" /> Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
