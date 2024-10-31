import React from "react";
import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex fixed items-center justify-center top-0 left-0 h-screen w-screen bg-black/10 z-10 ">
      <BeatLoader color="#BF94E4" size={14} />
    </div>
  );
};

export default Loader;
