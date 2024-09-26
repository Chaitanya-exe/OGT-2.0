"use client"
import { services } from "@/config/constants";
import { animateFromX } from "@/config/motion";
import { animate, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Video = () => {
  const ref = useRef(null);
  useEffect(() => {
    animateFromX("h1Video", "h2Video", 0.2);
  }, []);

  return (
    <section className="bg-fixed my-28 *:p-8 min-h-screen relative bg-Nwhite ">
    <Image src={"/illus.png"} width={280} height={268} alt="illustration" className="absolute right-0 -top-36" />
      <div
        className="w-full flex gap-28 items-start justify-between">
        
        <h1 className="h1Video text-bgColor">
          Fostering Growth and Building Dreams & Easily get Projects
        </h1>
        <h2 className="h2Video">
          O G T transcends simple project matchmaking. We aim to cultivate a
          thriving ecosystem for professional growth. By providing access to
          diverse opportunities and fostering meaningful connections, we empower
          Developers to build fulfilling careers
        </h2>
      </div>
      <div className="flex w-full justify-between h-screen">
        <div
          ref={ref}
          className="text-wrap pr-16 py-10 mb-16 max-w-2xl flex flex-col gap-12 *:my-12 overflow-y-scroll overflow-hidden"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className=""
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="h3Video">{service.title}</h3>
              <p className="pVideo">{service.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="videoRect h-[80vh] flex items-center justify-center bg-gray-200">
          <h2>Video</h2>
        </div>
      </div>
    </section>
  );
};

export default Video;
