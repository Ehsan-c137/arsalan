"use client";
import logo from "/public/arsalan-logo.svg";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";
import { usePathname } from "next/navigation";
export default function Header() {
   const pathname = usePathname();

   return (
      <header
         className={`w-full flex justify-between items-center ${
            pathname === "/" ? "text-white" : "text-black"
         } fixed top-0 p-6 transition-[background] z-50`}
      >
         <DesktopNav />
         <MobileNav />
      </header>
   );
}
