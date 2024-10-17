"use client";

import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";


const Header = () => {
  const {data : session} = useSession();
  


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
          <p className="text-center ogt-logo  flex ">
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
            {session?.user ? (
              <div className="flex gap-3 items-center">
                <Image src={`${session.user.image}`} width={30} height={30} alt={session.user.name.charAt(0).toUpperCase()} className="rounded-lg" />
                <button onClick={() => signOut()}>
                  <Button type="primary" text="Log out" className="w-[106px]" />
                </button>
              </div>
            ) : (

            <div className="flex gap-2 items-center">
              <button onClick={() => signIn()}>
                <Button type="primary" text="SignIn/SignUp" className=" w-[150px]" />
              </button>
              
            </div>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
