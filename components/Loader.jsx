import React from 'react'

const Loader = () => {
  return (
            <div className="fixed items-center justify-center top-0 left-0 h-screen w-screen bg-black/10 z-10 ">

      <BeatLoader color="#BF94E4" size={14} />
      </div>
  );
}

export default Loader
