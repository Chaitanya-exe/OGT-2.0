import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const transition = { type: "spring", duration: 0.8 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.6 },
  },
  whileInView: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 8,
    stiffness: 20,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const animateFromX = (h1Class, h2Class, delayBetween = 0.5) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${h1Class}`, // Start animation when this element enters the viewport
      start: "top 60%", // Adjust the start point (80% of the viewport height)
      toggleActions: "play none none none", // Play only once (no repeat)
      once: true,
    },
  });

  tl.fromTo(
    `.${h1Class}`,
    { x: "-100%", opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" } 
  );

  tl.fromTo(
    `.${h2Class}`,
    { x: "-100%", opacity: 0 }, 
    { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
    `+=${delayBetween}` 
  );
};



export const animateTextLines = (lineClass, delayBetween = 0.3) => {
    const lines = document.querySelectorAll(`.${lineClass} .line-block`);


  gsap.fromTo(
    lines,
    { opacity: 0, y: 40 }, 
    {
      opacity: 1,
      y: 0,
      stagger: delayBetween, 
      ease: "power3.out",
      duration: 1,
    }
  );
};




