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
               <div
                  className={`flex items-center justify-between px-3 ${
                     isLayout ? "h-20" : "h-12"
                  } font-semibold`}
               >
                  <span className="truncate">{heading}</span>
                  <div className="font-light">
                     {isLayout && (
                        <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
                     )}
                     {!isLayout && (
                        <div
                           className={`${
                              isOpen ? "rotate-45" : "rotate-0"
                           } duration-300`}
                        >
                           <PlusIcon />
                        </div>
                     )}
                  </div>
               </div>
               <div
                  className={`overflow-hidden transition-[max-height] duration-500 px-3 ${
                     !isLayout ? "text-left" : ""
                  }`}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                     paddingBottom: isLayout ? "8px" : "0px",
                     marginTop: isLayout ? "-8px" : "0px",
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
