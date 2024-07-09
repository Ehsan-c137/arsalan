"use client";

import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const shopItems = [
   {
      heading: "products",
      children: [
         { name: "All", href: "products" },
         { name: "Air Fryers", href: "air-fryers" },
         { name: "Coffe makers", href: "coffe-makers" },
         { name: "Ovens", href: "ovens" },
      ],
   },
   {
      heading: "PARTs",
      children: [
         { name: "Air Fryers Oven", href: "part-air-fryers-oven" },
         { name: "Air Purifier", href: "part-air-purifier" },
         { name: "Baristan Kettle", href: "part-bread-Maker" },
         { name: "Bread Maker", href: "part-bread-maker" },
         { name: "Chaiovar Samovar", href: "part-chaiovar-samovar" },
         { name: "Electric Samovar V1", href: "part-electric-samovar-v1" },
         { name: "Luna Kettle", href: "part-luna-kettle" },
         { name: "Turkish Tea Maker", href: "part-turkish-tea-Maker" },
      ],
      isLast: true,
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
               Smart Air Fryer & Oven, App-Controlled with Recipe Book
            </p>
         </div>
         <div className="flex  gap-10 pl-10 pt-10 lg:min-w-[1228px] max-w-[1228px] ml-auto mr-auto">
            <div className="pl-8 pr-8 pb-8">
               {shopItems.map((item) => (
                  <Accordion
                     key={item.heading}
                     heading={item.heading}
                     isLast={item.isLast}
                  >
                     {item.children.map((child) => {
                        const isAcitve =
                           `${`/collections/products/${child.href}`}` ===
                           pathname;

                        return (
                           <p
                              className={`flex items-center h-8 px-4 text-sm hover:text-red-600 transition-opacity ${
                                 isAcitve && "text-red-600"
                              }`}
                              onClick={() => {
                                 const isPartsSection =
                                    item.heading === "PARTs";
                                 if (isPartsSection) {
                                    router.push(`/collections/${child.href}`);
                                 } else {
                                    router.push(
                                       `/collections/products/${child.href}`
                                    );
                                 }
                              }}
                              key={child.href}
                           >
                              {child.name}
                           </p>
                        );
                     })}
                  </Accordion>
               ))}
            </div>
            <div className="flex justify-center">{children}</div>
         </div>
      </div>
   );
}
