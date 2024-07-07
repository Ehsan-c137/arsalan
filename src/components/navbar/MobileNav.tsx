"use client";

import style from "./MobileNav.module.css";
import logo from "/public/arsalan-logo.svg";
import Image from "next/image";
import Drawer from "../Drawer/Drawer";
import { useDrawer } from "@/context/drawerContext";
import DrawerComponent from "../Drawer/Drawer";

export default function MobileNav() {
   const { isOpen, setIsOpen } = useDrawer();

   return (
      <>
         <div className="flex justify-between w-full lg:hidden">
            <div
               className="flex gap-4"
               onClick={() => setIsOpen(!isOpen)}
               onBlur={() => setIsOpen(false)}
               onFocus={() => setIsOpen(!isOpen)}
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
            <Image src={logo} alt="logo" width={150} />
         </div>
      </>
   );
}
