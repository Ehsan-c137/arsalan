import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";
export default function CollectionsFilter({
   children,
}: {
   children: React.ReactNode;
}) {
   const accardionContent = [
      {
         heading: "products",
         children: ["ALL", "Air Fryers", "Coffe makers", "Ovens"],
      },
   ];
   return (
      <div className="flex flex-col">
         <div
            style={{
               borderTop: "1px solid #f5f5f5",
               borderBottom: "1px solid #f5f5f5",
            }}
            className="pl-10 pr-10 pt-12 pb-12 border-[black] font-semibold text-2xl"
         >
            Smart Air Fryer & Oven, App-Controlled with Recipe Book
         </div>
         <div className="flex pl-10 pt-10">
            <div className="pl-8 pr-8 pb-8">
               {accardionContent.map((item) => (
                  <Accordion key={item.heading} heading={item.heading}>
                     {item.children.map((child) => (
                        <Link
                           className="flex items-center h-8 px-4 text-sm hover:text-red-700 transition-opacity"
                           href={`/${child}`}
                           key={child}
                        >
                           {child}
                        </Link>
                     ))}
                  </Accordion>
               ))}
            </div>
            {children}
         </div>
      </div>
   );
}
