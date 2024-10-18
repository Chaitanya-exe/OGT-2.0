"use client";

import BlogCard from "@/components/BlogCard";
import PaginationUI from "@/components/Pagination";
import Searchcategory from "@/components/search/SearchBar";
import { tabs } from "@/config/constants";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const handleTabClick = (tab) => {
    const params = new URLSearchParams(window.location.search);
    params.set("category", tab);

    const newPathname = `${window.location.pathname}?${params.toString()}`;

    router.push(newPathname);
  };

  const handleViewAllClick = () => {
    router.push("?");
  };
  return (
    <section className="mx-28 my-10">
      <div className="py-8">
        <h2 className="h1Video text-5xl text-Nwhite">OGT- </h2>
        <span className=" text-lg font-light text-BO ">
          Deliver Projects from clients to developers
        </span>
      </div>

      <div className="flex justify-between gap-36 items-end">
        <div className="flex gap-2 cursor-pointer border-white/10 *:p-2 capitalize flex-1 border-b *:text-sm font-medium ">
          <span onClick={handleViewAllClick} className={`${!currentCategory ? 'font-bold border-b' : 'text-white/70'}`}>View All</span>
          {tabs.slice(0, 5).map((tab, i) => (
            <span onClick={() => handleTabClick(tab)} className={`${currentCategory === tab ? 'font-bold border-b' : 'text-white/70'}`}>{tab}</span>
          ))}
        </div>
        <Searchcategory
          className={
            "p-4 pl-12 bg-transparent rounded border focus:outline-none text-sm border-white/10"
          }
        />
      </div>
      <div className="flex my-12 justify-center flex-wrap gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
 
 <PaginationUI />
      
    </section>
  );
};

export default page;
