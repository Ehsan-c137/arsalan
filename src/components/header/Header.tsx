import logo from "/public/arsalan-logo.svg";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";

export default function Header() {
   return (
      <header className="w-full bg-transparent hover:bg-white flex justify-between items-center fixed top-0 p-6 transition-[background] ">
         <DesktopNav />
         <MobileNav />
      </header>
   );
}
