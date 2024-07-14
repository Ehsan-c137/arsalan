"use client";

import DesktopNav from "../navbar/DesktopNav";
import MobileNav from "../navbar/MobileNav";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CollectionsItem from "@/app/collections/collectionsItem";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
   const pathname = usePathname();
   // change logo on hover
   const [isHovered, setIsHovered] = useState<boolean>(false);

   return (
      <div className="flex flex-col">
         <header
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-full flex justify-between hover:bg-white items-center pointer-events-none ${
               pathname === "/" ? "text-white" : "text-black"
            } fixed top-0 px-6 z-50`}
         >
            <DesktopNav isHovered={isHovered} />
            <MobileNav />
         </header>
      </div>
   );
}
