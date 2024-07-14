import Link from "next/link";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import { convertToUrl } from "@/utils/convertToUrl";
import ArrowRight from "@/assets/icons/arrow-right";
import Image from "next/image";
import visa from "/public/images/visa.svg";
import mastercard from "/public/images/mastercard.svg";
import paypal from "/public/images/paypal.svg";
import YoutubeIcon from "@/assets/icons/youtubeIcon";
import PinterestIcon from "@/assets/icons/pinterest";

const shopItem = [
   "Air Fryer",
   "Air Fryer Oven",
   "Air Purifier",
   "Baristan Electric Gooseneck Kettle",
   "Braed Maker",
   "Electric Russian Samovar",
   "Luna Electric Tea Kettle",
   "Pour Over Coffee Maker",
   "Turkish Tea Maker",
   "Gift Card",
];

const helpItems = [
   "Support",
   "Return Policy",
   "Return Portal",
   "Shipping Policy",
   "Warranty Policy",
   "FAQ",
   "Accessibility",
];

const company = ["Our Story", "Blog", "Recipes"];

export default function Footer() {
   return (
      <footer className="w-full h-[100vh] bg-black flex flex-col">
         <nav className="px-12 pt-12 pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-between gap-8 w-full">
               <div className="col-span-1 flex-col flex gap-10">
                  <div>
                     <h4 className="text-white text-xl">
                        <span className="font-semibold">ARSALAN </span> <br />
                     </h4>
                     <p className="text-white text-xl font-light">
                        Technology of coffee & <br /> tea
                     </p>
                  </div>
                  <div className="flex items-center gap-4 space-between">
                     <Link href="instagram">
                        <svg
                           className="w-6 h-6"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 512 512"
                        >
                           <path
                              fill="#6b6b6b"
                              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                           />
                        </svg>
                     </Link>
                     <Link href={"/facebook"}>
                        <FacebookIcon />
                     </Link>
                     <Link href={"/youtube"}>
                        <YoutubeIcon />
                     </Link>
                     <Link href={"/pinterest"}>
                        <PinterestIcon />
                     </Link>
                  </div>
               </div>
               <div className="col-span-1 flex flex-col gap-10">
                  <div className="flex flex-col gap-4 ">
                     <h4 className="text-white font-semibold text-xl">Shop</h4>
                     <div className="flex flex-col gap-4">
                        {shopItem.map((item) => {
                           const url = convertToUrl(item);
                           return (
                              <Link
                                 key={item}
                                 href={`/collections/${url}`}
                                 className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                              >
                                 <p>{item}</p>
                              </Link>
                           );
                        })}
                        <Link
                           href={"/collections/products"}
                           className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                        >
                           <p>Shop All</p>
                        </Link>
                     </div>
                  </div>
                  <div className="flex flex-col col-span-1 gap-4">
                     <h4 className="text-white font-semibold text-xl">
                        Company
                     </h4>
                     <div className="flex flex-col gap-4">
                        {company.map((item) => {
                           const url = convertToUrl(item);
                           return (
                              <Link
                                 key={item}
                                 href={`/${url}`}
                                 className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                              >
                                 <p>{item}</p>
                              </Link>
                           );
                        })}
                     </div>
                  </div>
               </div>

               <div className="flex flex-col col-span-1 gap-10">
                  <div className="flex flex-col gap-4">
                     <h4 className="text-white font-semibold text-xl">Help</h4>
                     <div className="flex flex-col gap-4">
                        {helpItems.map((item) => {
                           const url = convertToUrl(item);
                           return (
                              <Link
                                 key={item}
                                 href={`/${url}`}
                                 className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                              >
                                 <p>{item}</p>
                              </Link>
                           );
                        })}
                     </div>
                  </div>
                  <div className="flex flex-col col-span-1 gap-4">
                     <h4 className="text-white font-semibold text-xl">
                        Contact
                     </h4>
                     <div className="flex flex-col gap-4">
                        <Link
                           href={`mailto:support@saki.us`}
                           className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                        >
                           <p>support@saki.us</p>
                        </Link>
                        <Link
                           href={`/become-an-affiliate`}
                           className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                        >
                           <p>Become an Affiliate</p>
                        </Link>
                        <Link
                           href={`/wholesale`}
                           className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500"
                        >
                           <p>Wholesale</p>
                        </Link>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col col-span-1 gap-10">
                  <div className="flex flex-col col-span-1 gap-4">
                     <h4 className="text-white font-semibold text-xl">
                        Get 10% Off On Your First Order
                     </h4>
                     <p className="text-white text-md font-medium opacity-75 hover:opacity-100 hover:underline duration-500">
                        Join our mailing list and be the first to know about new
                        products, special offers, and exclusive deals.
                     </p>
                     <div
                        className="flex focus-within:!border-b-white items-center justify-between pr-5 pb-1 duration-300"
                        style={{
                           borderBottom: "1px solid gray",
                        }}
                     >
                        <input
                           type="email"
                           placeholder="Your email"
                           style={{
                              outline: "none",
                              border: "none",
                              padding: "10px",
                              background: "transparent",
                              color: "white",
                           }}
                        />
                        <span className="w-2 h-2">
                           <ArrowRight />
                        </span>
                     </div>
                  </div>
                  {/*  */}
                  <div className="flex flex-col col-span-1 gap-4">
                     <p className="text-white text-xl">Latest Blog Article</p>
                     <p className="text-white opacity-75 hover:underline">
                        How Does Black Tea Benefit Your Heart?
                     </p>
                     <p className="text-white opacity-75 hover:underline">
                        The Samovar in Turkish Culture: Tradition & Modernity
                     </p>
                     <p className="text-white opacity-75 hover:underline">
                        What is Russian Samovar and How To Use It?
                     </p>
                  </div>
               </div>
            </div>
         </nav>
         <div className="p-4 text-center">
            <p className="text-white text-md">
               Terms + Conditions Privacy Policy Warranty
            </p>
            <p className="text-gray-400 text-sm">
               *Free shipping on orders $50+ applies to locations within the
               contiguous U.S. <br />, and excludes Hawaii, Alaska, and
               destinations outside of the U.S. Click to view our Accessibility
               Statement or contact us with accessibility-related questions.
            </p>
         </div>
         <div
            className="bg-[#1c1c1c] w-full px-6 py-6 text-gray flex items-center justify-between"
            style={{
               borderTop: "1px solid #373737",
            }}
         >
            <p className="text-gray-300 text-sm">
               Copyright © 2024 SAKI. All rights reserved.
            </p>
            <div className="flex items-center">
               <Link href={"/mastercard"}>
                  <Image
                     src={mastercard}
                     width={80}
                     height={60}
                     alt="mastercard"
                  />
               </Link>
               <Link href={"/paypal"}>
                  <Image src={paypal} width={80} height={40} alt="paypal" />
               </Link>
               <Link href={"/visa"}>
                  <Image src={visa} width={80} height={40} alt="mastercard" />
               </Link>
            </div>
         </div>
      </footer>
   );
}
