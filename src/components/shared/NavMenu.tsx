"use client";
import { signOut } from "next-auth/react";
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
        <button onClick={() => signOut()} className="btn10">
          Logout
        </button>
      ) : (
        <Link className="btn10" href={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};

export default NavMenu;
