"use client";
import Link from "next/link";
import Image from "next/image";
import logoDark from "/public/arsalan-logo-dark.svg";
import logo from "/public/arsalan-logo.png";
import { usePathname, useRouter } from "next/navigation";

const headerShops = [
   {
      title: "TeaSmart",
      desc: "Turkish Tea Maker",
      img: "/images/tea-makers/turkish-tea-maker/1.webp",
   },
   {
      title: "Baristan",
      desc: "Gooseneck Kettle",
      img: "/images/electric-kettels/baristan-electric-gooseneck-kettle/1.webp",
   },
   {
      title: "luna",
      desc: "Electric Kettle",
      img: "/images/electric-kettels/luna-electric-tea-kettle/1.webp",
   },
   {
      title: "Chalovar",
      desc: "Electric Russion Samovar",
      img: "/images/samovars/electric-russian-samovar/1.webp",
   },
   {
      title: "Carafe",
      desc: "Pour-over Coffee Maker",
      img: "/images/coffee-makers/pour-over-glass-coffee-maker/1.webp",
   },
   {
      title: "Replacement",
      desc: "parts",
      img: "/images/parts/bread-maker/bread-maker-pan/1.webp",
   },
   {
      title: "Shop",
      desc: "All",
      img: "/images/dropdown-shop-all.svg",
   },
];

export default function DesktopNav({ isHovered }: { isHovered: boolean }) {
   const pathname = usePathname();
   const headerLogo = isHovered ? logoDark : pathname === "/" ? logo : logoDark;
   const router = useRouter();

   return (
      <>
         <nav className="hidden lg:flex w-full justify-between items-center">
            <Link href={"/"}>
               <Image src={headerLogo} alt="logo" width={250} />
            </Link>

            <ul className="flex items-center gap-12 hover:text-black pointer-events-auto ">
               <Link
                  style={{
                     borderBottom: "1px solid transparent",
                  }}
                  href="/collections/products"
                  className="transition-colors group"
               >
                  <div className="group-hover:flex">
                     <li
                        className="hover:border-b-2 border-blue-400 py-8"
                        style={{
                           borderBottom: "1px solid transparent",
                        }}
                     >
                        Shop
                     </li>

                     <div className=" fixed w-full border-white p-4 group-hover:!flex bg-white flex-wrap z-60 hidden items-center justify-center gap-4 top-[90px] left-1/2 -translate-x-1/2 z-50">
                        {headerShops.map((item) => {
                           return (
                              <li
                                 onClick={() =>
                                    router.push(`/collections/${item.title}`)
                                 }
                                 key={item.title}
                                 className="text-center items-between flex-col flex hover:bg-gray-300/15 p-2"
                              >
                                 <Image
                                    src={item.img}
                                    width={150}
                                    height={150}
                                    alt={item.title}
                                 />
                                 <div className="text-black">
                                    <p className="text-sm font-semibold">
                                       {item.title}
                                    </p>
                                    <p className="text-xs">{item.desc}</p>
                                 </div>
                              </li>
                           );
                        })}
                     </div>
                  </div>
               </Link>
               <Link
                  href="/support"
                  className="transition-colors duration-400"
                  style={{
                     borderBottom: "1px solid transparent",
                  }}
               >
                  <li>Support</li>
               </Link>
            </ul>
         </nav>
      </>
   );
}
