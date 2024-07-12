import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import { usePathname, useRouter } from "next/navigation";
import { allProducts, allParts } from "@/constant";
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

export default function Filter() {
   const pathname = usePathname();
   const router = useRouter();
   const { isOpen, setIsOpen } = useDrawer();
   return (
      <div className="pr-8 pb-8">
         {shopItems.map((item) => (
            <Accordion
               key={item.heading}
               heading={item.heading}
               isLast={item.isLast}
            >
               {item.children.map((child) => {
                  const isAcitve =
                     `${`/collections/products/${child.href}`}` === pathname;

                  return (
                     <p
                        className={`flex items-center h-8 px-4 text-sm hover:text-red-600 transition-opacity truncate ${
                           isAcitve && "text-red-600"
                        }`}
                        onClick={() => {
                           isOpen && setIsOpen(false);
                           const isPartsSection = item.heading === "PARTs";
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
   );
}
