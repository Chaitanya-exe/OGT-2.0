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
 
  useEffect(() => {
    const hasRedirectedBefore =
      localStorage.getItem("hasRedirectedBefore") === "true";
    // const registrationInfo = localStorage.getItem("registrationInfo"); // Check for existing registration information

    if ( hasRedirectedBefore && pathname === "/registration") {
      router.push("/");
    }

    if (session?.user && !hasRedirectedBefore ) {
      router.push("/registration");
      localStorage.setItem("hasRedirectedBefore", "true");
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
