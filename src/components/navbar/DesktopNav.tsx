import Link from "next/link";
import Image from "next/image";
import ShoppingCart from "@/assets/icons/shoppingCart";
import logo from "/public/arsalan-logo.svg";

export default function DesktopNav() {
   return (
      <nav className="hidden lg:flex w-full justify-between items-center">
         <Link href={"/"}>
            <Image src={logo} alt="logo" width={250} />
         </Link>
         <ul className="flex items-center gap-12">
            <Link
               href="/collections"
               className="hover:text-red-500 transition-colors duration-400"
            >
               <li>Shop</li>
            </Link>
            <Link
               href="/support"
               className="hover:text-red-500 transition-colors duration-400"
            >
               <li>Support</li>
            </Link>
            <Link
               href="/shop"
               className="hover:text-red-500 transition-colors duration-400"
            >
               <li>
                  <ShoppingCart />
               </li>
            </Link>
         </ul>
      </nav>
   );
}
