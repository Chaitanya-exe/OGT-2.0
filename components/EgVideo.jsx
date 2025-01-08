"use client";
import { services } from "@/config/constants";
import { animateFromX } from "@/config/motion";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaRegPauseCircle } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";
import { VscMute } from "react-icons/vsc";


const EgVideo = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // Starts as playing

  const videoRef = useRef(null);
    const textRef = useRef();

  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  useEffect(() => {

   
      gsap.to('#leftdiv', {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: '#leftdiv',
        start: "top top",
        end: () => `bottom ${window.innerHeight }px`, // Stop when the last div comes to center

        scrub: true,
        pin: '#rightdiv',
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="my-28 *:p-8 min-h-screen relative h-[180vh] bg-Nwhite ">
      <Image
        src={"/illus.png"}
        width={280}
        height={268}
        alt="illustration"
        className="absolute right-0 -top-36"
      />
      <div ref={textRef} className="w-full overflow-hidden mt-4 flex gap-16 items-start justify-between ">
          {'Fostering Growth and Building Dreams & Easily get Projects'.split('').map((letter,i)=>(
        <h1 className="h1Video text-bgColor">
{letter}
        </h1>
          ))}
        <h2 className="h2Video max-w-2xl ">
          O G T transcends simple project matchmaking. We aim to cultivate a
          thriving ecosystem for professional growth. By providing access to
          diverse opportunities and fostering meaningful connections, we empower
          Developers to build fulfilling careers
        </h2>
      </div>
      <div id="rightdiv" className="flex w-full justify-between h-screen">
        <div
          id="leftdiv"
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

        <div className="videoRect mt-16 h-[80vh] relative flex items-center justify-center">
          <video
            ref={videoRef}
            src="./ogtvideo.mp4"
            autoPlay
            loop
            muted={isMuted} 
            className="w-full h-full"
          ></video>
          <div className="absolute bottom-4 left-4 flex space-x-2 bg-gray-800 bg-opacity-50 p-2 rounded">
            <button
              onClick={togglePlayPause}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {isPlaying ? <FaRegPauseCircle/> : <MdOutlinePlayCircle />}
            </button>

            <button
              onClick={toggleMute}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              {isMuted ? <VscMute/> : <GoUnmute/>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EgVideo;
