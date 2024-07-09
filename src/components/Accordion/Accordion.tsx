"use client";

import { useState } from "react";
import PlusIcon from "@/assets/icons/plusIcon";
import MinusIcon from "@/assets/icons/minusIcon";

interface IAccordion {
   children: React.ReactNode;
   isLast?: boolean;
   heading: string;
   isLayout?: boolean;
}
export default function Accordion({
   children,
   isLast,
   heading,
   isLayout,
   ...props
}: IAccordion) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <div className={`flex flex-col ${isLayout ? "w-56" : "w-full"}`}>
            <button
               className={`group border-t ${
                  isLast ? "border-b" : ""
               } border-[#c1c1c2] focus:outline-none`}
               onClick={() => setIsOpen(!isOpen)}
            >
               <div className="flex items-center justify-between h-20 px-3 font-semibold">
                  <span className="truncate">{heading}</span>
                  <div className="font-light">
                     {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </div>
               </div>
               <div
                  className={`overflow-hidden duration-500`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                     paddingBottom: "8px",
                     marginTop: "-8px",
                     maxHeight: isOpen ? "25rem" : "0rem",
                  }}
               >
                  {children}
               </div>
            </button>
         </div>
      </>
   );
}
