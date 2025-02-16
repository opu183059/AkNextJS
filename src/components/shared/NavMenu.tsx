import Link from "next/link";

const NavMenu = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      <Link href={"/"} className="cursor-pointer uppercase hover:text-white/50">
        Home
      </Link>
      <Link href={"/"} className="cursor-pointer uppercase hover:text-white/50">
        about
      </Link>
      <Link href={"/"} className="cursor-pointer uppercase hover:text-white/50">
        Projects
      </Link>
    </div>
  );
};

export default NavMenu;
