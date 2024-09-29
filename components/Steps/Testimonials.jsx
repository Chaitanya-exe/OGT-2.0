"use client";

import { testimonialData } from "@/config/constants";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Button from "../ui/Button";
import {motion} from "framer-motion"
import { fadeAnimation } from "@/config/motion";


const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 1);
  };
  const column1 = testimonialData.slice(0, visibleCount);
  const column2 = testimonialData.slice(visibleCount, visibleCount * 2);
  const column3 = testimonialData.slice(visibleCount * 2, visibleCount * 3);

  console.log(testimonialData);

  return (
    <div className="relative my-9 min-h-[40vh]">
      <h1 className="h1Video mx-12">What our users are saying.</h1>
      <Image
        src={"/spiral.png"}
        width={200}
        height={100}
        alt="spiral"
        className="absolute -top-28 left-0"
      />
      <div className="flex justify-center flex-wrap gap-12 ">
        <div className="flex flex-col mt-28 gap-6">
          {column1.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </div>

        <div className="flex flex-col mt-20 gap-6">
          {column2.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </div>

        <div className="flex flex-col mt-14 gap-6">
          {column3.map((item, index) => (
            <Card item={item} index={index} />
          ))}
        </div>
      </div>
      {visibleCount * 3 < testimonialData.length && (
        <button
          onClick={handleShowMore}
          className="float-right mx-[66px] hover:underline text-BO hover:text-"
        >
          Show More
        </button>
      )}
      <div className="my-20 flex justify-center">
        <Button type="primary" text="Browse Projects" className="w-[160px]" />
      </div>
    </div>
  );
};

export default Testimonials;

const Card = ({ item, index }) => {
  return (
    <motion.div {...fadeAnimation}
      key={index}
      className={`testiCard shadow-l2/10 shadow-lg  hover:shadow-[0px_2px_30px_#203752]`}
    >
      <div className="flex gap-2 items-center ">
        <Image src={"/user.png"} width={40} height={40} alt="user" />
        <h3 className="text-lg">{item.userName}</h3>
        <span className="text-BO text-sm">{item.company}</span>
      </div>
      <p className="text-BO text-sm">{item.feedback}</p>
      <Rating
        name="read-only"
        value={item.ratingCount}
        readOnly
        sx={{
          "& .MuiRating-iconFilled": {
            color: "#EADA46",
          },
          "& .MuiRating-iconEmpty": {
            color: "#D3D3D3",
          },
        }}
      />
    </motion.div>
  );
};
