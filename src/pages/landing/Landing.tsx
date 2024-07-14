import Video from "@/components/video/Video";
import Image from "next/image";
import Link from "next/link";
import ProductsSwiper from "./ProductsSwiper";
import ChevronRightIcon from "@/assets/icons/chevron-right";
import BlogSwiper from "./BlogSwiper";

export function Landing() {
   return (
      <div className="flex flex-col w-full">
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-tea-maker-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] flex flex-col gap-4 pl-6 lg:pl-10 space-y-6 absolute z-40 text-white">
               <div className="space-y-2">
                  <p className="text-3xl">SAKI</p>
                  <p className="text-6xl">Turkish Tea Maker.</p>
                  <p className="text-2xl">
                     Freshness redefined. Elevating your tea experience to new
                     heights.
                  </p>
               </div>
               <Link href={"/collections"}>
                  <button className="border-2 px-10 py-2 border-red-600 bg-transparent text-white btn-effect">
                     EXPLORE
                  </button>
               </Link>
            </div>
         </div>
         {/*  */}
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="bg-red-600 pl-6 py-10 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-10 justify-center">
               <div className="flex flex-col gap-4">
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
               </div>
               <div className="flex gap-4">
                  <Link href="/collections">
                     <button className="border-2 border-white pt-2 pb-2 pr-4 pl-4 btn-effect-white">
                        DISCOVER
                     </button>
                  </Link>
                  <Link href="/products/turkish-tea-maker">
                     <button className="pt-2 pb-2 pr-4 pl-4 text-white hover:text-black duration-300">
                        SHOP NOW
                     </button>
                  </Link>
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
            <div className="pb-[30px] lg:pb-[100px] flex flex-col gap-10 pl-6 lg:pl-10 space-y-6 absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-5xl md:text-6xl">Baristan</p>
                  <p className="text-3xl">Precision in Every Pour</p>
               </div>
               <Link href="/collections">
                  <button className="border-2 px-10 py-2 border-red-600 bg-transparent btn-effect">
                     EXPLORE
                  </button>
               </Link>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="pl-6 py-10 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-10 justify-center items-start bg-[#161a1d] text-white">
               <div className="flex flex-col gap-4">
                  <p className="text-4xl md:text-6xl">
                     Baristan <br /> Electric Gooseneck Kettle
                  </p>

                  <p className="text-lg md:text-2xl">
                     Master the perfect pour. <br />
                     Unrestricted flow for unrivaled coffee precision.
                  </p>
               </div>
               <div className="flex gap-10 items-center">
                  <Link href="/collections/products">
                     <button className="border-2 border-red-600 py-2 px-10 btn-effect">
                        DISCOVER
                     </button>
                  </Link>
                  <Link
                     href="/products/baristan-electric-gooseneck/kettle"
                     className="hover:text-red-600 duration-300"
                  >
                     <button className="flex items-center gap-2">
                        SHOP
                        <span className="text-red-600">
                           <ChevronRightIcon />
                        </span>
                     </button>
                  </Link>
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
                  src="/images/home-baristan-section-desktop.webp"
                  alt="home baristan"
               />
            </div>
         </div>
         <div className="hero h-[100vh] w-full flex items-end relative object-cover">
            <Video src="/videos/home-section-luna-big.mp4" />
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 flex flex-col gap-8 items-start absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-6xl">Luna</p>
                  <p className="text-3xl">7 Pressets, Infinite Possibilities</p>
               </div>
               <button className="border-2 py-2 px-10 border-red-600 btn-effect">
                  EXPLORE
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="bg-white text-black lg:pl-10 lg:pr-6 px-6 py-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-semibold">
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
               <div className="flex items-center gap-8">
                  <button className="border-2 border-red-600 px-10 py-2 btn-effect">
                     DISCOVER
                  </button>
                  <button className="flex items-center gap-2 hover:text-red-600">
                     SHOP
                     <span className="text-red-600">
                        <ChevronRightIcon />
                     </span>
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
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 flex flex-col gap-10 absolute z-50 text-white">
               <div className="space-y-2">
                  <p className="text-4xl md:text-6xl">
                     Electric Russian Samovar
                  </p>
                  <p className="text-lg md:text-3xl">
                     A modern touch to timeless traditions.
                  </p>
               </div>
               <Link href="/collections">
                  <button className="border-2 px-10 py-2 btn-effect border-red-600">
                     EXPLORE
                  </button>
               </Link>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="text-white bg-[#56101a] pl-6 lg:pl-10 py-10 h-full w-full col-span-1 flex flex-col gap-10 justify-center">
               <div className="flex flex-col gap-4">
                  <div>
                     <h2 className="text-4xl md:text-6xl font-bold ">
                        Electric Russian Samovar
                     </h2>
                  </div>
                  <p className="text-lg md:text-2xl ">
                     Introducing the future of tea making. Traditional taste,
                     advanced brew.
                  </p>
               </div>
               <div className="flex gap-6">
                  <button className="border-2 border-red-600 btn-effect py-2 px-10">
                     DISCOVER
                  </button>
                  <button className="flex items-center hover:text-red-600 duration-300 gap-2 pt-2 pb-2 pr-4 pl-4 text-">
                     SHOP
                     <span className="text-red-600">
                        <ChevronRightIcon />
                     </span>
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
            <div className=" text-black pl-6 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-10 justify-center">
               <div className="flex flex-col gap-4">
                  <div>
                     <h2 className="text-4xl md:text-6xl font-bold">
                        SAKI Products
                     </h2>
                  </div>
                  <p className="text-lg md:text-2xl">
                     Delivering the ultimate coffee and tea experience through
                     innovation and thoughtful design.
                  </p>
               </div>
               <div>
                  <Link href="/collections">
                     <button className="border-2 border-red-600  py-2 px-10 tracking-wider hover:text-white btn-effect">
                        EXPLORE
                     </button>
                  </Link>
               </div>
            </div>
            <div className="text-black h-full w-full col-span-1 flex gap-4 overflow-x-hidden items-center justify-center">
               <ProductsSwiper />
               <div className="hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:grid">
                  <Link
                     href="/products/pour-over-carafe"
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
                  >
                     <div className="bg-[#f5f5f7] w-full h-full flex items-center justify-center">
                        <Image
                           src={"/images/pour-over-carafe.webp"}
                           alt="pour over carafe"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link
                     href={"/products/luna-precision-electric-kettle"}
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
                  >
                     <div className="bg-[#f5f5f7] w-full h-full flex items-center justify-center">
                        <Image
                           src={"/images/baristan-electric-kettle.webp"}
                           alt="baristan-electric-kettle"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link
                     href={"/products/electric-samovar"}
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
                  >
                     <div className="bg-[#f5f5f7] w-full h-full flex items-center justify-center">
                        <Image
                           src={"/images/electric-samovar.webp"}
                           alt="electric samovar"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link
                     href={"/products/baristan-electric-kettle"}
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
                  >
                     <div className="bg-[#f5f5f7] w-full h-full flex items-center justify-center">
                        <Image
                           src={"/images/baristan-electric-kettle-2.webp"}
                           alt="baristan-electric-kettle"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
                  <Link
                     href={"/products/electric-samovar"}
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
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
                  <Link
                     href={"/collections/products"}
                     className="min-w-[150px] min-h-[150px] max-w-[300px] max-h-[300px]"
                  >
                     <div className="bg-[#f5f5f7] w-[300px] h-[300px] flex items-center justify-center">
                        <Image
                           src={"/images/dropdown-shop-all.svg"}
                           alt="shop"
                           width={200}
                           height={200}
                        />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div className="flex flex-col gap-16 items-center justify-center overflow-x-hidden h-[100vh] bg-[#f5f5f7]">
            <div className="flex flex-col gap-10 text-center">
               <div className="flex flex-col gap-6">
                  <h2 className="text-5xl font-bold">Blog Highlights</h2>
                  <p className="text-[#858585] text-2xl">
                     Our digital blog hub curates guides, recipes, and insights
                     to enhance your product experience.
                  </p>
               </div>
               <div className="overflow-x-hidden flex gap-10">
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
               </div>
            </div>
         </div>
      </div>
   );
}

export default Landing;
