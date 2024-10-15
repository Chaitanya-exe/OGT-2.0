import Image from "next/image";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const BlogCard = () => {
  return (
    <div className=" max-w-[400px] ">
      <Image
        src={"/Layer 2.png"}
        alt="img"
        width={150}
        height={100}
        className="rounded-[22px] border"
      />
      <div className="">
        <span className="text-BO text-sm">#Design</span>
        <div className="font-semibold text-[18px] flex items-start gap-2">
          <p>Connect with inspiring projects from around the world .</p>
          <IoMdArrowForward className="-rotate-45 size-5" />
        </div>
        <p className="text-BO text-[14px]">
          Connect with inspiring projects from around the world and collaborate
          with businesses that value .
        </p>
        <div className="flex items-center gap-2 mt-3.5">
          <Image
            src={"/user.png"}
            width={30}
            height={30}
            alt="user"
            className="rounded-full"
          />
          <div className="text-xs *:p-0.5">
            <p>Chaitanya</p>
            <p className="text-BO">14 OCT 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
