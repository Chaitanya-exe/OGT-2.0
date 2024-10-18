"use client"
import Tabs from "@/components/Tabs";
import {motion } from "framer-motion"
import Sphere from "@/components/Sphere";
import Index from "@/components/Steps/Index";
import Testimonials from "@/components/Steps/Testimonials";
import EgVideo from "@/components/EgVideo";
import { fadeAnimation, headContentAnimation, headTextAnimation } from "@/config/motion";

export default function Home() {
 

  return (
    <main className="min-h-screen *:p-10  ">
      <motion.div className="max-w-5xl mt-16 mx-auto text-center flex flex-col gap-5 items-center">
        <motion.h2 {...headTextAnimation} className="">
          <span className="heroOgt text-white">ogt</span>
          <span className="heroTxt">
            {" "}
            : The Global marketplace for Top Talent.
          </span>
        </motion.h2>
        <motion.h4
          {...headContentAnimation}
          className="heroDesc leading-[26px] px-20 tracking-wide"
        >
          Connect with inspiring projects from around the world and collaborate
          with businesses that value your unique skills. Embrace the freedom to
          choose the work you love, and build a flourishing career without
          borders. For the businesses and startups it's great market place for
          the services which will make your business easier for you.
        </motion.h4>
        <motion.div
          {...fadeAnimation}
          className="flex w-fit bg-e1/10 
 border border-e1/20 rounded-full p-1"
        >
          <button text="Developer" className="l1_button bg-l1 ">
            Developer
          </button>
          <button className="l1_button">Employer</button>
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
