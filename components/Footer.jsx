
import React from "react";
import { footerDummyData } from "@/config/constants";
import { RxDiscordLogo } from "react-icons/rx";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";



const Footer = () => {
  return (
    <div className="flex bg-red-20 border-t border-e1/20 p-20 justify-between capitalize">
      <div className="flex flex-col justify-between">
        <h2 className="ogt-logo lowercase">ogt</h2>
        <div className="text-sm text-BO">
          <p className="underline underline-offset-2">Made in India</p>
          <p>Copyright &copy; 2024 RSMI.Inc</p>
        </div>
      </div>
      {footerDummyData.map((item,i) => (
        <div key={i} className="space-y-3">
          <h3 className="text-[18px]">{item.name}</h3>
          <ul className="list-disc list-inside text-BO">
            {item.list.map((listItem, i) => (
              <Link key={i} href={listItem.link}>

              <li key={i} className="hover:text-white cursor-pointer">
                {listItem.name}
              </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
      <div className="space-y-3">
        <h2 className="text-[18px]">Join the community</h2>
        <div className="gap-4 flex *:size-6 text-BO cursor-pointer">
          <RxDiscordLogo className="hover:text-white" />
          <IoLogoInstagram className="hover:text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
