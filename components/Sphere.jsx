"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import Trusted from "./Trusted";
import { fadeAnimation } from "@/config/motion";

const Sphere = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mx-8 bg-fixed relative text-center items-center flex gap-5 flex-col min-h-[70vh] ">
      <motion.div
        ref={ref}
        initial={{ scale: 2, opacity: 0, rotate: 90 }}
        animate={isInView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="absolute -top-24 left-[25vw] -z-10">
        <Image src={"/sphere.png"} alt="spere svg here" width={700} height={500} />
      </motion.div>
      <div className="middleGrad left-[35vw] -z-50 " />
      <motion.h2 {...fadeAnimation} className="max-w-2xl lineClass pb-8">
        <span className="ogt-logo">ogt</span>
        <span className="h1Video">
          ,where finding Developers is a real Breeze
        </span>
      </motion.h2>

      <div className="flex items-center mb-20 *:backdrop-blur-[100px] gap-9 custom-height h-[310px]">
        <Boxes />
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
      <Trusted/>
    </section>
  );
};

export default Sphere;

const Boxes = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.8 }}
      viewport={{ once: true }}
      className="bg-e1/10 flex flex-col gap-2.5 text-start p-2.5 border border-e1/20 rounded-[12px]"
    >
      <Image src={"/Diary.png"} width={130} height={130} alt="icon" />
      <h2>No limitations</h2>
      <p>
        World is your oyster! Find or offer any Development service, anywhere.
        We connect you with endless opportunities.
      </p>
    </motion.div>
  );
};
