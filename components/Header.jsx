import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";

const Header = () => {
  return (
    <nav className="pb-[1px] px-2 relative bg-gradient-to-r from-bgColor via-pink-400 to-bgColor">
      <div className="bg-bgColor py-1 ">
        <div className="topOvalGrad" />
        <div className="flex w-full justify-evenly mx-auto items-center gap-20 px-14 pb-4 pt-2 ">
          <div className="flex gap-10 w-1/3">
            <a>About us</a>

            <a>
              Resouces
              <IoIosArrowDown className="inline-flex mx-2" />
            </a>

            <a>
              Notifications
              <span className="badge ">0</span>
              <IoIosArrowDown className="inline-flex mx-2" />
            </a>
          </div>
          <p className="text-center ogt-logo  flex-1 ">
            <a>ogt</a>
          </p>
          <div className="flex gap-10  items-center">
            <a>
              Contact us
              <IoIosArrowDown className="inline-flex mx-2" />
            </a>

            <a>
              Help
              <IoIosArrowDown className="inline-flex mx-2" />
            </a>

            <div className="flex gap-2 items-center">
              <Button type="primary" text="Login" />
              <Button type="secondary" text="Signup" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
