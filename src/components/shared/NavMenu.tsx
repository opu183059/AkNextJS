"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const NavMenu = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();

  const navmenu = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <div className="flex gap-4 items-center justify-center">
      {navmenu.map((item) => (
        <Link
          href={item.href}
          className={`${
            pathname == item.href ? "active" : " hover:text-white/50"
          } cursor-pointer uppercase`}
          key={item.name}
        >
          {item.name}
        </Link>
      ))}
      {session?.user ? (
        <>
          <div className="relative group">
            <Image
              src={
                session.user.image ||
                "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg="
              }
              alt={session.user.name || "User Image"}
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
            />

            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100">
              <ul className="text-gray-700">
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-t-lg cursor-pointer">
                  <Link href={"/dashboard"}> Dashboard</Link>
                </li>
                <li className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-b-lg cursor-pointer">
                  <button
                    onClick={() => signOut()}
                    className="btn2 !text-gray-700 hover:!text-gray-50"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <Link className="btn2 !bg-[#be2df8]" href={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};

export default NavMenu;
