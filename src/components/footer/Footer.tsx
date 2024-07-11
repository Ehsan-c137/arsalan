import Link from "next/link";
import FacebookIcon from "@/assets/icons/FacebookIcon";

export default function Footer() {
   return (
      <footer className="w-full bg-black p-12">
         <nav>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 w-full ">
               <div>
                  <h4 className="text-white text-xl">
                     <span className="font-semibold">ARSALAN </span> <br />
                  </h4>
                  <p className="text-white text-xl font-light">
                     Technology of coffee & <br /> tea
                  </p>
               </div>
               <div className="flex flex-col lg:flex-row lg:gap-8 items-start lg:items-center gap-4">
                  <Link
                     href={"/collections"}
                     className="text-white text-xl font-medium hover:opacity-75 duration-500"
                  >
                     shop
                  </Link>
                  <Link
                     href={"/about-us"}
                     className="text-white text-xl font-medium hover:opacity-75 duration-500"
                  >
                     About us
                  </Link>
                  <Link
                     href={"/contact-us"}
                     className="text-white text-xl font-medium hover:opacity-75 duration-500"
                  >
                     Contact us
                  </Link>
               </div>
               <div className="flex items-center gap-4">
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
               </div>
            </div>
         </nav>
      </footer>
   );
}
