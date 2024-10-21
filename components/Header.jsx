"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./ui/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IoMdLogOut } from "react-icons/io";

import { FaUser } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <>
                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick}>
                    <Image
                      src={session?.user.img}
                      width={35}
                      height={35}
                      alt={session.user.name.charAt(0).toUpperCase()}
                      className="rounded-full"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  MenuListProps={{
                    className:
                      "dropDown_menu min-w-[220px]  flex flex-col justify-start bg-bgColor/80 text-white hover: ",
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >

                <Link href={session?.user.role === "WORKER" ? "/developer" : "/employer" }>
                  <MenuItem
                    onClick={handleClose}
                    className="flex hover:bg-bgColor/15 gap-2 items-center py-3 "
                  >
                    <span className="secondary_grad p-1">
                      <Image
                        src={session.user?.img}
                        width={32}
                        height={32}
                        alt={session.user.name.charAt(0).toUpperCase()}
                        className="rounded-full "
                      />
                    </span>
                    <div>
                      <p>{session.user.name}</p>
                      <p className="text-sm  text-BO">Role</p>
                    </div>
                  </MenuItem>

                  </Link>
                  <Link href={"/developer/profile"}>
                    <MenuItem
                      onClick={handleClose}
                      className="hover:bg-white/15 rounde py-4"
                    >
                      <FaUser className="mr-2 size-5" /> View Profile
                    </MenuItem>
                  </Link>
                  <Divider className="bg-white/20" />
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      signOut();
                    }}
                    className="hover:bg-white/15 rounde py-4"
                  >
                    <IoMdLogOut className="mr-2 size-6" /> Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <div className="flex gap-2 items-center">
                <button onClick={() => signIn()}>
                  <Button type="primary" text="SignIn/SignUp" className=" w-[175px]" />
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
