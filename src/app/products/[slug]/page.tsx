import Accordion from "@/components/Accordion/Accordion";

export default function Page() {
   return (
      <div className="min-h-[100vh] pt-28 px-10">
         <div className="grid grid-cols-7 gap-10">
            <div className="col-span-4 bg-yellow-200">asdf</div>
            <div className="col-span-3 space-y-5">
               <h1 className="text-4xl font-semibold ">
                  Bread Maker Kneading Paddles
               </h1>
               <p className="text-4xl font-bold">$12</p>
               <button className="rounded-full w-full bg-blue-500 hover:bg-blue-400 duration-300 font-semibold font-size-18px p-4 text-white">
                  Add To Cart
               </button>
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
