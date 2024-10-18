"use client";
import { services } from "@/config/constants";
import { animateFromX } from "@/config/motion";
import { motion} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);



const EgVideo = () => {
//   const ref = useRef(null);
//   useEffect(() => {
//     animateFromX("h1Video", "h2Video", 0.2);
//   }, []);

const leftdiv = useRef(null);
const rightdiv = useRef(null);


useEffect(()=>{
    const leftContent = leftdiv.current;
    const rightContent = rightdiv.current;
    const items = leftContent.querySelectorAll('.item');
    const lastItem = items[items.length - 1];

    gsap.to(leftContent, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: leftContent,
        start: "top top",
        end: () => `bottom ${window.innerHeight / 2}px`, // Stop when the last div comes to center

        scrub: true,
        pin: rightContent,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }

},[])

  return (
    <section className="my-28 *:p-8 min-h-screen relative h-[180vh] bg-Nwhite ">
      <Image
        src={"/illus.png"}
        width={280}
        height={268}
        alt="illustration"
        className="absolute right-0 -top-36"
      />
      <div className="w-full mt-4 flex gap-16 items-start justify-between ">
        <h1 className="h1Video text-bgColor">
          Fostering Growth and Building Dreams & Easily get Projects
        </h1>
        <h2 className="h2Video max-w-2xl ">
          O G T transcends simple project matchmaking. We aim to cultivate a
          thriving ecosystem for professional growth. By providing access to
          diverse opportunities and fostering meaningful connections, we empower
          Developers to build fulfilling careers
        </h2>
      </div>
      <div ref={rightdiv} className="flex w-full justify-between h-screen">
        <div
          ref={leftdiv}
          className="left-content text-wrap pr-16 py-10 mb-16 max-w-2xl flex flex-col gap-12 *:my-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="item text-bgColor"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="h3Video">{service.title}</h3>
              <p className="pVideo">{service.content}</p>
            </motion.div>
          ))}
        </div>

        <div className="videoRect mt-16 h-[80vh] relative flex items-center justify-center bg-gray-200">
          <h2>Video</h2>
          {/* <video src="" autoPlay muted loop ></video> */}
        </div>
      </div>
    </section>
  );
};

export default EgVideo;
