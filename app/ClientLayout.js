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
    if (session) {
      const user = session.user;
      if (user?.role === "NULL") {
        router.push("/registration");
      }
    }
  }, [session, router, pathname]);

 

  const excludeHeaderFooter =
    pathname === "/developer/profile" ||
    pathname === "/registration" ||
    pathname.startsWith("/client/project/");

  return (
    <div className="min-h-screen flex flex-col">
      {!excludeHeaderFooter && <Header />}

      <main className="flex-grow">{children}</main>

      {!excludeHeaderFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;
