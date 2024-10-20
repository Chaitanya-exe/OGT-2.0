"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ClientLayout = ({ children }) => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const router = useRouter();
 
  // useEffect(() => {
  //   const hasRedirectedBefore =
  //     localStorage.getItem("hasRedirectedBefore") === "true";

  //   // const registrationInfo = localStorage.getItem("registrationInfo"); 

  //   if ( hasRedirectedBefore && pathname === "/registration") {
  //     router.push("/");
  //   }

  //   if (session?.user && !hasRedirectedBefore ) {
  //     router.push("/registration");
  //     // localStorage.setItem("hasRedirectedBefore", "true");
  //   }
  // }, [session, router, pathname]);


  useEffect(() => {
    if (session) {
      const user = session.user;
      const isUserIncomplete =
        !user?.name ||
        !user?.email ||
        !user?.role ||
        !user?.phNumber ||
        !user?.country ||
        !user?.description ||
        !user?.dob ||
        !(user?.skills && user.skills.length > 0);

      // Redirect to /registration if any fields are incomplete
      if (isUserIncomplete && pathname !== "/registration") {
        router.push("/registration");
      }

      // Redirect to home page (/) if the user is complete and on the registration page
      if (!isUserIncomplete && pathname === "/registration") {
        router.push("/");
      }
    }
  }, [session, router, pathname]);

 

  const excludeHeaderFooter =
    pathname === "/developer/profile" || pathname === "/registration";

  return (
    <div className="min-h-screen flex flex-col">
      {!excludeHeaderFooter && <Header />}

      <main className="flex-grow">{children}</main>

      {!excludeHeaderFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;
