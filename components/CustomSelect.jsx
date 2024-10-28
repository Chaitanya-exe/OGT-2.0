import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


function CustomSelect() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-32">
      {/* Trigger to open/close dropdown */}
      <div
        className="p-2 border-b border-white/20 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption === "all" ? "All" : "Active"}</span>
        <IoIosArrowDown />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full  rounded bg-white/15 backdrop-blur-3xl  z-10">
          <label className="flex items-center p-2 cursor-pointer">
            <input
              type="radio"
              name="filter"
              value="all"
              checked={selectedOption === "all"}
              onChange={() => handleOptionChange("all")}
              className="mr-2 checked:bg-l2"
            />
            All
          </label>
          <label className="flex items-center p-2 cursor-pointer">
            <input
              type="radio"
              name="filter"
              value="active"
              checked={selectedOption === "active"}
              onChange={() => handleOptionChange("active")}
              className="mr-2"
            />
            Active
          </label>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
