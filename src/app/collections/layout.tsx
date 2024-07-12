"use client";

import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { allProducts, allParts } from "@/constant";
import Filter from "@/components/filter/Filter";

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
      title: "ARSALAN products",
   },
];

export default function CollectionsFilter({
   children,
}: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();
   const router = useRouter();

   return (
      <div className="flex flex-col pt-28 min-h-[100vh]">
         <div
            style={{
               borderTop: "1px solid #f5f5f5",
               borderBottom: "1px solid #f5f5f5",
            }}
            className="py-12 flex justify-center border-[black] font-semibold text-2xl"
         >
            <p className="max-w-[1228px] w-full ml-auto mr-auto">
               {pathname === "/collections/products"
                  ? "ARSALAN products"
                  : "Smart Air Fryer & Oven, App-Controlled with Recipe Book"}
            </p>
         </div>
         <div className="flex gap-10 pt-10 lg:min-w-[1228px] max-w-[1228px] ml-auto mr-auto">
            <div className="hidden lg:block">
               <Filter />
            </div>
            <div className="flex justify-center">{children}</div>
         </div>
      </div>
   );
}
