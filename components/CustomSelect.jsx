import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


function CustomSelect({value,menuItems,setValue}) {
  const [selectedOption, setSelectedOption] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (newValue) => {
    setSelectedOption(newValue);
    setValue(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative w-32">
      <div
        className="p-2 border-b border-white/20 capitalize flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption}</span>
        <IoIosArrowDown />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full  rounded bg-white/15 backdrop-blur-3xl  z-10">
        {
          menuItems?.map((item)=>(

          <label className="flex items-center p-2 cursor-pointer">
            <input
              type="radio"
              name="filter"
              value="all"
              checked={selectedOption === item}
              onChange={() => handleOptionChange(item)}
              className="mr-2 checked:bg-l2"
            />
            {item}
          </label>
          ))
        }
         
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
