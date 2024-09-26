import React from "react";

const Trusted = () => {
  const companies = Array(6).fill("Google");
  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-bgColor/60 via-e1/35 to-bgColor/60 w-full py-[1px] my-10">
      <div className="flex py-9 justify-between items-center bg-bgColor">
        <h1 className="h1Video align-middle h-fit text-BO">Trusted By</h1>
        <div className="flex  *:trustedText justify-center flex-wrap gap-9">
          {companies.map((company, index) => (
            <p key={index}>{company}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;