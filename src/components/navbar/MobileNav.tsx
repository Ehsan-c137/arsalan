"use client";

import style from "./MobileNav.module.css";
import Image from "next/image";
import { useDrawer } from "@/context/drawerContext";
import DrawerComponent from "../Drawer/Drawer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import logoDark from "/public/arsalan-logo-dark.svg";
import logo from "/public/arsalan-logo.png";
import Link from "next/link";

export default function MobileNav() {
   const { isOpen, setIsOpen } = useDrawer();
   const pathname = usePathname();
   const headerLogo = pathname === "/" ? logo : logoDark;

   useEffect(() => {
      if (isOpen) {
         document.body.style.height = "100vh";
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.height = "auto";
         document.body.style.overflow = "auto";
      }
   }, [isOpen]);

   return (
      <>
         <nav className="flex justify-between items-center w-full lg:hidden py-4 pointer-events-auto">
            <div
               className="flex gap-4"
               onClick={() => setIsOpen((prev: boolean) => !prev)}
               onBlur={() => setIsOpen(false)}
               style={{
                  zIndex: 10,
               }}
            >
               <div
                  className={`${style.burgerMenu} ${
                     !isOpen ? style.burgerMenuClosed : ""
                  } `}
               >
                  <div className={style.bar}></div>
                  <div className={style.bar}></div>
                  <div className={style.bar}></div>
               </div>
            </div>

            <DrawerComponent />
            <Link href="/">
               <Image src={headerLogo} alt="logo" width={150} />
            </Link>
         </nav>
      </>
   );
}
