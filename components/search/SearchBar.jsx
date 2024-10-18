"use client";

import React, { useState, Fragment, useEffect } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { tabs } from "@/config/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Searchcategory = ({className}) => {
  const searchParams = useSearchParams()
  const urlCategory = searchParams.get('category');
  const [category, setcategory] = useState(urlCategory);
  const [query, setQuery] = useState("");
  const router = useRouter();

  


  const updateCategoryParam = () => {
    const params = new URLSearchParams(window.location.search)
    if(category){
      params.set('category',category);

    }else{
      params.delete('category');
    }

   const newPathname = `${
      window.location.pathname
    }?${params.toString()}`;

    router.push(newPathname);
  };


 useEffect(() => {
  updateCategoryParam();

 },[category])


  const filteredCategory =
    query === ""
      ? tabs
      : tabs.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-category">
      <Combobox value={category} onChange={setcategory}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={"/searchvector.png"}
              width={20}
              height={20}
              alt="logo"
              className="ml-4 "
            />
          </ComboboxButton>

          <ComboboxInput
            placeholder="Search here"
            className={className}
            displayValue={() => category}
            onChange={(e) => setQuery(e.target.value)}
          />

          <MdKeyboardArrowDown className="absolute top-[16px] right-4 size-5" />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions
              className="absolute z-10 mt-1 max-h-60 min-w-[300px] max-w-[500px] overflow-auto rounded-md bg-white/10 backdrop-blur-2xl py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {
                filteredCategory.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className="group flex cursor-default data-[focus]:text-bgColor items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-200"
                  >
                    <IoIosCheckmark className="invisible size-4 group-data-[selected]:visible" />
                    <div className="text-sm/6">{item}</div>
                  </ComboboxOption>
                ))
                // )
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Searchcategory;
