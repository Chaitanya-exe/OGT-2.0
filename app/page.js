"use client";
import Tabs from "@/components/Tabs";
import { motion } from "framer-motion";
import Sphere from "@/components/Sphere";
import Index from "@/components/Steps/Index";
import Testimonials from "@/components/Steps/Testimonials";
import EgVideo from "@/components/EgVideo";
import Image from "next/image";

import {
  fadeAnimation,
  headContentAnimation,
  headTextAnimation,
} from "@/config/motion";


export default function Home() {
  return (
    <main className="min-h-screen *:p-10  ">
      <motion.div className="max-w-5xl relative mt-16 mx-auto text-center flex flex-col gap-5 items-center">
      <Image src="/Group.png" width={420} height={300} alt="svg" className="absolute -top-14 opacity-80 right-0 -z-10" />
        <motion.h2 {...headTextAnimation} className="">
          <span className="heroOgt text-white">OGT</span>
          <span className="heroTxt">
            {" "}
            : Expert Remote Services for Your Business
          </span>
        </motion.h2>
        <motion.h4
          {...headContentAnimation}
          className=" text-2xl leading-[26px] px-20 tracking-wide text-left"
        >
          At OGT, we deliver reliable remote services tailored to meet your business needs. From streamlining operations to providing expert solutions, we help you save time and focus on growth. With a commitment to quality and client satisfaction, OGT ensures every project is handled with professionalism and precision. Partner with us to simplify your processes and achieve your goals effortlessly.
        </motion.h4>
        <motion.div
          {...fadeAnimation}
          className="flex w-fit bg-e1/10 
 border border-e1/20 rounded-full p-1"
        >
          {/* <button text="Developer" className="l1_button bg-l1 ">
            Developer
          </button>
          <button className="l1_button">Employer</button> */}
        </motion.div>
      </motion.div>
      <div>
        <Tabs direction="left" />
        <Tabs direction="right" />
      </div>
      <EgVideo />
      <Sphere />
      <Index />
      <Testimonials />
    </main>
  );
}
