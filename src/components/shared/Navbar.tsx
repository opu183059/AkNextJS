import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="sticky top-0 left-0 w-full lg:pt-1 text-center z-50">
      <div className="lg:flex justify-between items-center container mx-auto bg-black/20 lg:rounded-full px-8 py-3 backdrop-blur-2xl">
        <div className="logo">
          <div className="hidden relative lg:flex justify-center mb-1 lg:mb-0 items-center gap-1">
            <Image
              src="https://i.ibb.co/DrXgNK1/AK-logo.png"
              width={32}
              height={32}
              alt=""
              className="w-8 h-8"
            />
            <div className="relative">
              <h1 className="text-xl -mt-3 font-extrabold uppercase text-violet-400">
                Akther
              </h1>
              <p className="text-[10px] text-fuchsia-400 font-bold tracking-[4px] absolute -right-1 top-2">
                UZ ZAMAN
              </p>
            </div>
          </div>
          <div className="lg:hidden flex justify-center mb-2 lg:mb-0 items-center gap-1">
            <h1 className="text-2xl font-extrabold uppercase text-violet-400">
              Akther
            </h1>
            <Image
              src="https://i.ibb.co/DrXgNK1/AK-logo.png"
              width={32}
              height={32}
              alt=""
              className="w-8 h-8"
            />
            <h1 className="text-2xl font-extrabold uppercase text-violet-400">
              Zaman
            </h1>
          </div>
        </div>
        <NavMenu session={session} />
      </div>
    </div>
  );
};

export default Navbar;
