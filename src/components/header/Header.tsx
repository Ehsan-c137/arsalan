import logo from "/public/arsalan-logo.svg";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";

export default function Header() {
   return (
      <header className="w-full flex justify-between items-center text-white fixed top-0 p-6 transition-[background] z-50 ">
         <DesktopNav />
         <MobileNav />
      </header>
   );
}
