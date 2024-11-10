import { redirect, useRouter } from "next/navigation";
import React from "react";
import { IoArrowRedo } from "react-icons/io5";

const notifications = [
  { id: 1, message: "New message from John" },
  { id: 2, message: "Your report is ready for download" },
  { id: 3, message: "Reminder: Meeting at 3 PM" },
];

const NotificationModal = () => {
  const router = useRouter();

  return (
    <div className="absolute right-0 mt-1 w-96 bg-bgColor/90 backdrop-blur-2xl border border-white/20 shadow-lg rounded-lg  py-4 z-10">
      <h3 className="text-[18px] px-4 font-semibold mb-2">Notifications (3)</h3>
      <ul className=" *:px-4">
        {notifications.map((notification) => (
          <li
            key={notification.id}
            className="py-3 border-b  border-white/10 flex justify-between items-start last:border-none cursor-pointer hover:bg-l2/5"
          >
            <div className="">
              <h4 className="text-[16px] font-medium">Project Name</h4>
              <h5 className="text-white/50 text-[14px]">Updated task 3</h5>
            </div>
            <span className="text-white/50 text-xs">Now</span>
          </li>
        ))}
      </ul>
      <div onClick={()=>{router.push('/notifications')}}  className="text-l2 cursor-pointer hover:text-l2/75 text-sm flex justify-end items-center mt-2  px-4">
        See More
        <IoArrowRedo className="inline-flex  ml-1 " />

      </div>
    </div>
  );
};

export default NotificationModal;
