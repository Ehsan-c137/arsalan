"use client";

import { useDrawer } from "@/context/drawerContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Filter from "../filter/Filter";

export default function DrawerComponent() {
   const { isOpen, setIsOpen } = useDrawer();
   const pathname = usePathname();

   return (
      <>
         <div
            onClick={() => setIsOpen(false)}
            className={`${
               isOpen ? "opacity-80" : "left-[-200%] opacity-0"
            } top-0 fixed w-full h-full bg-gray-500  overflow-hidden z-8`}
         ></div>
         <div
            onBlur={() => setIsOpen(false)}
            className="fixed bg-white top-0 w-[90%] md:w-[30%] h-full transition-[left] duration-500 pt-24 pr-6 pl-6 pb-6"
            style={{
               left: isOpen ? "0%" : "-100%",
               zIndex: 9,
            }}
         >
            <div className="flex flex-col gap-4 md:hidden">
               {pathname?.startsWith("/collections") ? (
                  <Filter />
               ) : (
                  <nav className="flex flex-col w-full justify-between text-black">
                     <ul className="flex flex-col gap-6">
                        <Link
                           href="/collections"
                           className="transition-colors duration-400"
                        >
                           <li>Shop</li>
                        </Link>
                        <Link
                           href="/support"
                           className="transition-colors duration-400"
                        >
                           <li>Support</li>
                        </Link>
                     </ul>
                  </nav>
               )}
            </div>
         </div>
      </>
   );
}
