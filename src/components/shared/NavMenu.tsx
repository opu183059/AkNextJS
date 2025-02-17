"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  console.log(pathname);

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
      <Link className="btn10" href={"/login"}>
        Login
      </Link>
    </div>
  );
};

export default NavMenu;
