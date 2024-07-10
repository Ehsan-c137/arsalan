import Video from "@/components/video/Video";
import Image from "next/image";
import Link from "next/link";
import ProductsSwiper from "./ProductsSwiper";

export function Landing() {
   return (
      <div className="flex flex-col w-full">
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-tea-maker-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 space-y-6 absolute z-40 text-white">
               <div className="space-y-2">
                  <p className="text-3xl">SAKI</p>
                  <p className="text-6xl">Turkish Tea Maker.</p>
                  <p className="text-2xl">
                     Freshness redefined. Elevating your tea experience to new
                     heights.
                  </p>
               </div>
               <button className="border-2 pt-2 pb-2 pl-4 pr-4 border-red-500 bg-transparent text-white hover:bg-red-500 transition-[background] duration-400">
                  EXPLORE
               </button>
            </div>
         </div>
         {/*  */}
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="bg-red-600 pl-6 py-10 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <p className="font-size-14px text-white">New</p>
                  <p className="text-6xl text-white">Turkish Tea Maker</p>
               </div>
               <p className="text-2xl text-white">
                  Elevate your tea experience with Turkish Tea Maker, fusing
                  <br />
                  innovation and tradition for authentic flavors sand a sleek
                  design.
               </p>
               <div>
                  <button className="border-2 border-white pt-2 pb-2 pr-4 pl-4 text-white hover:text-red-600 hover:bg-white transition-colors">
                     DISCOVER
                  </button>
                  <button className="pt-2 pb-2 pr-4 pl-4 text-white">
                     SHOP NOW
                  </button>
               </div>
            </div>
            <div className="bg-black h-full w-full col-span-1 ">
               <Image
                  width={0}
                  height={0}
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  sizes="100vw"
                  src="/images/home-teamaker-section-desktop.webp"
                  alt="home tea maker"
               />
            </div>
         </div>
         {/*  */}
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-baristan-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 space-y-6 absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-5xl md:text-6xl">Baristan</p>
                  <p className="text-3xl">Precision in Every Pour</p>
               </div>
               <button className="border-2 pt-2 pb-2 pl-4 pr-4 border-red-500 bg-transparent text-white hover:bg-red-500 transition-[background] duration-400">
                  EXPLORE
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="pl-6 py-10 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center items-start bg-[#161a1d] text-white">
               <p className="text-4xl md:text-6xl">
                  Baristan <br /> Electric Gooseneck Kettle
               </p>

               <p className="text-lg md:text-2xl">
                  Master the perfect pour. <br />
                  Unrestricted flow for unrivaled coffee precision.
               </p>

               <button className="border-2 border-red-600 pt-2 pb-2 pr-4 pl-4 hover:text-white hover:bg-red-600 transition-colors">
                  DISCOVER
               </button>
            </div>
            <div className="bg-black h-full w-full col-span-1">
               <Image
                  width={0}
                  height={0}
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  sizes="100vw"
                  src="/images/home-baristan-section-desktop.webp"
                  alt="home baristan"
               />
            </div>
         </div>
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-luna-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 space-y-6 absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-6xl">Luna</p>
                  <p className="text-3xl">7 Pressets, Infinite Possibilities</p>
               </div>
               <button className="border-2 pt-2 pb-2 pl-4 pr-4 border-red-500 bg-transparent text-white hover:bg-red-500 transition-[background] duration-400">
                  EXPLORE
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="bg-white text-black pl-6 py-10 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-bold">
                     Luna <br />
                     Adjustable Temperature Kettle
                  </h2>
               </div>
               <p className="text-lg md:text-2xl ">
                  Elevate your tea experience with Turkish Tea Maker, fusing
                  <br />
                  innovation and tradition for authentic flavors sand a sleek
                  design.
               </p>
               <div>
                  <button className="border-2 border-red-500  pt-2 pb-2 pr-4 pl-4  hover:text-red-600 hover:bg-white transition-colors">
                     DISCOVER
                  </button>
                  <button className="pt-2 pb-2 pr-4 pl-4 text-white">
                     SHOP NOW
                  </button>
               </div>
            </div>
            <div className="bg-black h-full w-full col-span-1">
               <Image
                  width={0}
                  height={0}
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  sizes="100vw"
                  src="/images/home-luna-section-desktop.webp"
                  alt="home tea maker"
               />
            </div>
         </div>
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-samovar-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 space-y-6 absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-4xl md:text-6xl">
                     Electric Russian Samovar
                  </p>
                  <p className="text-lg md:text-3xl">
                     A modern touch to timeless traditions.
                  </p>
               </div>
               <button className="border-2 pt-2 pb-2 pl-4 pr-4 border-red-500 bg-transparent text-white hover:bg-red-500 transition-[background] duration-400">
                  EXPLORE
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="text-white bg-[#56101a] pl-6 lg:pl-10 py-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-bold">
                     Electric Russian Samovar
                  </h2>
               </div>
               <p className="text-lg md:text-2xl ">
                  Introducing the future of tea making. Traditional taste,
                  advanced brew.
               </p>
               <div>
                  <button className="border-2 border-red-500  pt-2 pb-2 pr-4 pl-4  hover:text-red-600 hover:bg-white transition-colors">
                     DISCOVER
                  </button>
                  <button className="pt-2 pb-2 pr-4 pl-4 text-white">
                     SHOP NOW
                  </button>
               </div>
            </div>
            <div className="bg-black h-full w-full col-span-1">
               <Image
                  width={0}
                  height={0}
                  style={{
                     width: "100%",
                     height: "100%",
                     objectFit: "cover",
                  }}
                  sizes="100vw"
                  src="/images/home-electric-samovar-section-desktop.webp"
                  alt="home tea maker"
               />
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className=" text-black pl-6 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-bold">
                     SAKI Products
                  </h2>
               </div>
               <p className="text-lg md:text-2xl">
                  Delivering the ultimate coffee and tea experience through
                  innovation and thoughtful design.
               </p>
               <div>
                  <button className="border-2 border-red-500  pt-2 pb-2 pr-4 pl-4  hover:text-red-600 hover:bg-white transition-colors">
                     DISCOVER
                  </button>
               </div>
            </div>
            <div className="text-black h-full w-full col-span-1 flex items-center gap-4 overflow-x-hidden justify-center">
               <ProductsSwiper />
               <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hidden md:grid">
                  <Link href="/products/pour-over-carafe">
                     <div className="bg-[#f5f5f7]  h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/pour-over-carafe.webp"}
                           alt="pour over carafe"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link href={"/products/luna-precision-electric-kettle"}>
                     <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/baristan-electric-kettle.webp"}
                           alt="baristan-electric-kettle"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link href={"/products/electric-samovar"}>
                     <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/electric-samovar.webp"}
                           alt="electric samovar"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link href={"/products/baristan-electric-kettle"}>
                     <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/baristan-electric-kettle-2.webp"}
                           alt="baristan-electric-kettle"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link href={"/products/electric-samovar"}>
                     <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/electric-samovar.webp"}
                           alt="baristan-electric-kettle"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Landing;
