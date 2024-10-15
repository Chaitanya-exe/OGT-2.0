import BlogCard from "@/components/BlogCard";
import React from "react";

const page = () => {
  return (
    <section>
      <h2 className="h1Video text-Nwhite">OGT- </h2>
      <span className=" text-lg font-light text-BO ">
        Deliver Projects from clients to developers
      </span>
      <div className="flex flex-wrap gap-14">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default page;
