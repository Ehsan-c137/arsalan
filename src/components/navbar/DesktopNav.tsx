"use client";
import Link from "next/link";
import Image from "next/image";
import ShoppingCart from "@/assets/icons/shoppingCart";
import logoDark from "/public/arsalan-logo-dark.svg";
import logo from "/public/arsalan-logo.png";
import { usePathname } from "next/navigation";

export default function DesktopNav() {
   const pathname = usePathname();
   const headerLogo = pathname === "/" ? logo : logoDark;
   return (
      <nav className="hidden lg:flex w-full justify-between items-center">
         <Link href={"/"}>
            <Image src={headerLogo} alt="logo" width={250} />
         </Link>

         <ul className="flex items-center gap-12">
            <Link
               href="/collections/products"
               className="transition-colors duration-400"
            >
               <li>Shop</li>
            </Link>
            <Link href="/support" className="transition-colors duration-400">
               <li>Support</li>
            </Link>
         </ul>
      </nav>
   );
}
