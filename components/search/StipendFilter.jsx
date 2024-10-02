"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const StipendFilter = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown
  const [selectedOption, setSelectedOption] = useState("");
  const dropDownRef = useRef(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [dropDownRef]);

  const stipendOptions = [
    { value: "0-10k", label: "Till 10k" },
    { value: "10k-30k", label: "10k - 30k" },
    { value: "30k-50k", label: "30k - 50k" },
    { value: "50k+", label: "Above 50k" },
  ];

  return (
    <div className="relative" ref={dropDownRef}>
      <Image
        src={"/searchvector.png"}
        width={20}
        height={20}
        alt="logo"
        className="ml-4 absolute top-[14px] "
      />

      {/* Input Field */}
      <input
        type="text"
        className="searchbar__input"
        placeholder="Choose Stipend"
        onClick={() => setIsOpen(!isOpen)}
        value={
          selectedOption
            ? stipendOptions.find((option) => option.value === selectedOption)
                ?.label
            : ""
        }
        readOnly
      />

      <MdKeyboardArrowDown className="ml-4 absolute top-[16px] right-4 size-5 " />

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[60px] backdrop-blur-2xl left-0 w-full bg-white/10 border border-white/20 rounded shadow-lg z-10">
          {stipendOptions.map((option) => (
            <label
              key={option.value}
              className="block p-3 cursor-pointer hover:bg-gray-200 hover:text-bgColor"
            >
              <input
                type="radio"
                name="stipend"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={handleOptionChange}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default StipendFilter;
