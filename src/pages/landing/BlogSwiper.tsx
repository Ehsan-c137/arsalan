"use client";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSwiper() {
   return (
      <Swiper
         modules={[Pagination]}
         pagination={true}
         spaceBetween={5}
         slidesPerView={1}
         onSlideChange={() => console.log("slide change")}
         onSwiper={(swiper) => console.log(swiper)}
      >
         <SwiperSlide>
            <Link href="/blog">
               <div className="flex flex-col gap-4 bg-white rounded-xl p-4 w-[350px]">
                  <Image
                     height={260}
                     width={350}
                     style={{
                        borderRadius: "12px",
                     }}
                     alt="blog"
                     src="/images/blog/1.webp"
                  />

                  <div className="flex flex-col gap-1 text-left">
                     <p className="hover:underline">
                        The World of Tea: Global Tea Rituals and Tea Times
                     </p>
                     <p className="text-[#858585]">By SAKI Team</p>
                  </div>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/blog">
               <div className="flex flex-col gap-4 bg-white rounded-xl p-4 w-[350px]">
                  <Image
                     height={260}
                     width={350}
                     style={{
                        borderRadius: "12px",
                     }}
                     alt="blog"
                     src="/images/blog/1.webp"
                  />

                  <div className="flex flex-col gap-1 text-left">
                     <p className="hover:underline">
                        The World of Tea: Global Tea Rituals and Tea Times
                     </p>
                     <p className="text-[#858585]">By SAKI Team</p>
                  </div>
               </div>
            </Link>
         </SwiperSlide>
         <SwiperSlide>
            <Link href="/blog">
               <div className="flex flex-col gap-4 bg-white rounded-xl p-4 w-[350px]">
                  <Image
                     height={260}
                     width={350}
                     style={{
                        borderRadius: "12px",
                     }}
                     alt="blog"
                     src="/images/blog/1.webp"
                  />

                  <div className="flex flex-col gap-1 text-left">
                     <p className="hover:underline">
                        The World of Tea: Global Tea Rituals and Tea Times
                     </p>
                     <p className="text-[#858585]">By SAKI Team</p>
                  </div>
               </div>
            </Link>
         </SwiperSlide>
      </Swiper>
   );
}
