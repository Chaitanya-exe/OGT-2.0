"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { tabs } from "@/config/constants";

export default function Tabs({ direction }) {
  const tabRef = useRef(null);
  const tween = useRef(null);
  useEffect(() => {
    tween.current = gsap.to(tabRef.current, {
      x: `${direction === "left" ? "-10%" : "10%"}`,
      duration: 10,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.current.kill();
    };
  }, []);

  const stopAnimation = () => {
    tween.current.pause();
  };

  const resumeAnimation = () => {
    tween.current.resume();
  };

  return (
    <div className="overflow-hidden mx-20 p-2 rounded-xl relative">
      <div
        ref={tabRef}
        className="flex space-x-4 w-fit relative "
        onMouseEnter={stopAnimation}
        onMouseLeave={resumeAnimation}
      >
        {tabs.map((tab, index) => (
          <Tab tab={tab} />
        ))}
      </div>
    </div>
  );
}

const Tab = ({ tab }) => {
  return (
    <div className="tab text-nowrap w-fit px-7 relative shadow-md backdrop-blur overflow-hidden hover:-hue-rotate-15 shadow-purple-500/10 border-r border-t border-x-purple-400/50 border-y-pink-400/20 group cursor-pointer">
      {tab}
      <span className="absolute inset-0 bg-gradient-to-tr from-l1 via-pink-100/70 to-l1 ease-linear delay-75 duration-200 origin-top-left group-hover:scale-x-100 -z-10 transition-transform scale-x-0" />
    </div>
  );
};
