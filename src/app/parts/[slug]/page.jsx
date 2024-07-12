"use client";

import { usePathname } from "next/navigation";
import data from "@/app/data.json";
import Image from "next/image";
import Accordion from "@/components/Accordion/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import { convertToUrl } from "@/utils/convertToUrl";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Page() {
   const pathname = usePathname();
   const url = pathname?.split("/").pop();

   const product = data.parts.find((p) => {
      const path = convertToUrl(p.title);
      // const p = convertToUrl(p.title);
      console.log(path, url);
      return path === url;
   });

   console.log(product);
   return (
      <div className="min-h-[100vh] pt-28 px-10">
         <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
            <div className="col-span-4 flex items-center justify-center">
               <Swiper
                  className="w-full h-full"
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  {product?.imgSrc?.map((img) => {
                     return (
                        <SwiperSlide
                           key={img}
                           style={{
                              display: "flex",
                           }}
                           className="flex items-center justify-center"
                        >
                           <div className="max-w-[500px] max-h-['500px'] object-cover">
                              <Image
                                 width={0}
                                 height={0}
                                 sizes="100vw"
                                 src={img}
                                 objectFit="cover"
                                 alt={product?.title}
                                 className="w-full h-full"
                              />
                           </div>
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            </div>
            <div className="col-span-3 space-y-5">
               <h1 className="text-4xl font-semibold">{product?.title}</h1>
               <p className="text-4xl font-bold">${product?.price}</p>
               <div>
                  <Accordion heading="Description">
                     <p>{product?.description}</p>
                  </Accordion>
                  <Accordion isLast heading="Details">
                     <p>{product?.description}</p>
                  </Accordion>
               </div>
            </div>
         </div>
      </div>
   );
}
