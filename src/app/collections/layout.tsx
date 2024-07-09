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
         children: ["All", "Air Fryers", "Coffe makers", "Ovens"],
      },
      {
         heading: "PARTs",
         children: ["Air Fryers Oven"],
         isLast: true,
      },
   ];
   return (
      <div className="flex flex-col pt-28">
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
         <div className="flex justify-center gap-10 pl-10 pt-10 max-w-[1228px] ml-auto mr-auto">
            <div className="pl-8 pr-8 pb-8">
               {accardionContent.map((item) => (
                  <Accordion
                     key={item.heading}
                     heading={item.heading}
                     isLast={item.isLast}
                  >
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
            <div className="flex justify-center">{children}</div>
         </div>
      </div>
   );
}
