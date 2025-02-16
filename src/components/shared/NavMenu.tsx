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
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
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
    </div>
  );
};

export default NavMenu;
