"use client";

import { usePathname } from "next/navigation";
import data from "@/app/data.json";
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

   const product = data.products.find((p) => {
      const path = convertToUrl(p.title);
      return path === url;
   });

   console.log(product);
   return (
      <div className="min-h-[100vh] pt-28 px-10">
         <div className="grid grid-cols-7 gap-10">
            <div className="col-span-4 bg-yellow-200">
               <Swiper
                  className="w-full h-full"
                  spaceBetween={50}
                  slidesPerView={2}
                  navigation
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  <SwiperSlide>Slide 1</SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                  <SwiperSlide>Slide 3</SwiperSlide>
                  <SwiperSlide>Slide 4</SwiperSlide>
                  ...
               </Swiper>
            </div>
            <div className="col-span-3 space-y-5">
               <h1 className="text-4xl font-semibold">{product?.title}</h1>
               <p className="text-4xl font-bold">${product?.price}</p>
               <div>
                  <Accordion heading="Description">
                     <p className="text-left">
                        The Arsalan Baristan electric gooseneck kettle is
                        thoughtfully designed and meticulously engineered to
                        combine aesthetics and functionality. Shed light on your
                        coffee journey using a red light ring. From +/-1°F
                        pinpoint temperature accuracy to rubber non-slip handle
                        giving you the apex control. Light the barista inside
                        you.
                     </p>
                     <br />
                     <p className="text-left text-lg font-bold">
                        Feature overview
                     </p>
                     Features Overview: Light ring indicator Plastic-free
                     interior 1200 watts heating power Pinpoint temperature
                     accuracy Angled rubber handle Enlarged gooseneck spout
                     Built-in brew stopwatch 60-minutes auto temperature hold
                     1.0 L boiling capacity
                  </Accordion>
                  <Accordion isLast heading="Details">
                     Power Supply AC 120V, 60Hz Rated Power 1200W Capacity 34
                     oz/1.0 Liters Temperature 104 - 212 °F Keep Warm 1 - 60
                     minutes Weight 5.3 lb / 2.4 kg Cord Length 3.2 ft PlugType
                     Type-B (For U.S. & Canada) Materials 304 stainless steel
                     kettle body & lid. Warranty 2 Years Certifications ETL
                     compliance, FCC certified
                  </Accordion>
               </div>
            </div>
         </div>
         <div>reserved</div>
      </div>
   );
}
