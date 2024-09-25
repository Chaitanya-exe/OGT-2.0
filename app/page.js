<<<<<<< HEAD

import Tabs from "@/components/Tabs";
import Video from "@/components/Video";
import HeroSection from "@/components/HeroSection";
import Sphere from "@/components/Sphere";

export default function Home() {
 

  return (
    <main className="min-h-screen *:p-10 ">
      <HeroSection />
      <div>
        <Tabs direction="left" />
        <Tabs direction="right" />
=======
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();

  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="sm:flex hidden">
            {session?.user ? (
              <div className="flex gap-3 md:gap-5">

                <button type="button" className="outline_btn" onClick={() => signOut()}>
                  sign out
                </button>
                <Link href="/">
                  <Image
                    src={session?.user.image}
                    alt="profile"
                    width={37}
                    height={37}
                    className="rounded-full"
                  />
                </Link>
              </div>
            ) : (<>{providers && Object.values(providers).map((provider) => {
              return (
                <button
                  className="black_btn"
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}> Sign In</button>
              )
            })}</>)}
          </div>
        </div>
>>>>>>> 43640c4393539b0396f27a003596995617b29e67
      </div>
      <Video />
      <Sphere/>

    </main>
  );
}
