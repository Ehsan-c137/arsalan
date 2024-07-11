"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// style={{
//    "--swiper-pagination-color": "gray",
// }}

export default function ProductsSwiper() {
   return (
      <Swiper
         className="flex lg:!hidden h-[90%] items-center"
         modules={[Pagination]}
         pagination={true}
         spaceBetween={50}
         slidesPerView={1}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
      >
         <SwiperSlide>
            <Link
               href="/products/pour-over-carafe"
               className="flex items-center justify-center"
            >
               <div className="bg-[#f5f5f7]  h-[300px] flex items-center justify-center">
                  <Image
                     src={"/images/pour-over-carafe.webp"}
                     alt="pour over carafe"
                     width={200}
                     height={200}
                  />
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link
               href={"/products/luna-precision-electric-kettle"}
               className="flex items-center justify-center"
            >
               <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                  <Image
                     src={"/images/baristan-electric-kettle.webp"}
                     alt="baristan-electric-kettle"
                     width={200}
                     height={200}
                  />
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link
               href={"/products/electric-samovar"}
               className="flex items-center justify-center"
            >
               <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                  <Image
                     src={"/images/electric-samovar.webp"}
                     alt="electric samovar"
                     width={200}
                     height={200}
                  />
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link
               href={"/products/baristan-electric-kettle"}
               className="flex items-center justify-center"
            >
               <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                  <Image
                     src={"/images/baristan-electric-kettle-2.webp"}
                     alt="baristan-electric-kettle"
                     width={200}
                     height={200}
                  />
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link
               href={"/products/electric-samovar"}
               className="flex items-center justify-center"
            >
               <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                  <Image
                     src={"/images/electric-samovar.webp"}
                     alt="baristan-electric-kettle"
                     width={200}
                     height={200}
                  />
               </div>
            </Link>
         </SwiperSlide>
      </Swiper>
   );
}
