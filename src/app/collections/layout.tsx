"use client";

import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { allProducts, allParts } from "@/constant";
import Filter from "@/components/filter/Filter";
import { useDrawer } from "@/context/drawerContext";

const shopItems = [
   {
      heading: "products",
      children: [
         ...allProducts.map((item) => {
            return {
               name: item.category?.toLocaleLowerCase(),
               href: item.url,
            };
         }),
      ],
   },
   {
      heading: "PARTs",
      children: [
         ...allParts.map((item) => {
            return {
               name: item.category?.toLocaleLowerCase(),
               href: `/parts/${item.url}`,
            };
         }),
      ],
      isLast: true,
   },
];

const layoutHeader = [
   {
      pathname: "/collections/products",
      title: "SAKI products",
   },
   {
      pathname: "/collections/air-fryers",
      title: "Smart Air Fryer & Oven, App-Controlled with Recipe Book",
   },
   {
      pathname: "/collections/air-purifiers",
      title: "HEPA H13 Air Purifier: Ultimate Filtration for Healthier Breathing",
   },
   {
      pathname: "/collections/bread-makers",
      title: "Artisan Bread Maker 3 LB X-large with Ceramic Pan I SAKI Products",
   },
   {
      pathname: "/collections/coffee-makers",
      title: "Turkish Coffee Maker & Pour-Over Coffee Maker I SAKI Products",
   },
   {
      pathname: "/collections/electric-kettles",
      title: "Baristan Gooseneck Kettle & Luna Electric Tea Kettle Selection",
   },
];

export default function CollectionsFilter({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();
   const { setIsOpen } = useDrawer();

   return (
      <div className="flex flex-col pt-16 lg:pt-28 min-h-[100vh]">
         <div
            style={{
               borderTop: "1px solid #f5f5f5",
               borderBottom: "1px solid #f5f5f5",
            }}
            className="py-6 lg:py-12 flex justify-center border-[black] font-semibold text-2xl"
         >
            <p className="max-w-[1228px] pl-[30px] md:p-0 w-full ml-auto mr-auto">
               {layoutHeader.find((item) => item.pathname === pathname)?.title}
            </p>
         </div>
         <div className="flex gap-10 pt-5 lg:pt-10 lg:min-w-[1228px] max-w-[1228px] ml-auto mr-auto">
            <div className="hidden lg:block">
               <Filter />
            </div>

            <div className="flex flex-col justify-center md:justify-center items-center md:items-start md:flow-row">
               <button
                  className="px-10 py-2 border-2 border-black lg:hidden max-w-[270px] w-full flex justify-center text-sm mb-5 "
                  onClick={() => setIsOpen(true)}
               >
                  FILTER
               </button>
               {children}
            </div>
         </div>
      </div>
   );
}
