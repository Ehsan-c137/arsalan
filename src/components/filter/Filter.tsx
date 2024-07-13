import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import { usePathname, useRouter } from "next/navigation";
import { allProducts, allParts } from "@/constant";
import { useDrawer } from "@/context/drawerContext";

const shopItems = [
   {
      heading: "products",
      children: [
         {
            name: "all",
            href: "/",
         },
         ...allProducts.map((item) => {
            return {
               name: item.category?.toLocaleLowerCase(),
               href: `/${item.url}`,
            };
         }),
      ],
   },
   {
      heading: "PARTs",
      children: [
         {
            name: "all",
            href: "/",
         },
         ...allParts.map((item) => {
            return {
               name: item.category?.toLocaleLowerCase(),
               href: `/${item.url}`,
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
         {shopItems.map((item) => {
            const isPartsSection = item.heading === "PARTs";

            return (
               <Accordion
                  key={item.heading}
                  heading={item.heading}
                  isLast={item.isLast}
               >
                  {item.children.map((child) => {
                     const itemUrl = `/collections/${item.heading.toLowerCase()}${
                        child.href.endsWith("/") ? "" : "/"
                     }`;
                     console.log(itemUrl, pathname);
                     const isAcitve = itemUrl === pathname;

                     // const isAllProductSection =
                     //    "/collections/products" === pathname &&
                     //    child.name.toLowerCase() === "all";

                     // const isAllPartsSecton =
                     //    "/collections/parts" === pathname &&
                     //    child.name.toLowerCase() === "all";

                     // console.log(pathname);

                     return (
                        <p
                           className={`flex items-center h-8 px-4 text-gray-500 text-sm hover:opacity-70 transition-opacity truncate capitalize ${
                              isAcitve ? "!font-semibold" : "font-normal"
                           }`}
                           onClick={() => {
                              isOpen && setIsOpen(false);
                              // router.push(
                              //    `/collections/${item.heading}/${child.href}`
                              // );
                              const isPartsSection =
                                 item.heading.toLowerCase() === "parts";
                              if (isPartsSection) {
                                 if (child.name.toLowerCase() === "all") {
                                    router.push("/collections/parts");
                                 } else {
                                    router.push(
                                       `/collections/parts/${child.href}`
                                    );
                                 }
                              } else {
                                 if (child.name.toLowerCase() === "all") {
                                    router.push("/collections/products");
                                 } else {
                                    router.push(
                                       `/collections/products/${child.href}`
                                    );
                                 }
                              }
                           }}
                           key={child.href}
                        >
                           {child.name}
                        </p>
                     );
                  })}
               </Accordion>
            );
         })}
      </div>
   );
}
