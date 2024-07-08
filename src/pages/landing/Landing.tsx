export function Landing() {
   return (
      <div className="flex flex-col w-full">
         <div className="hero h-[100vh] w-full flex items-end">
            <div className="pb-[30px] lg:pb-[100px] pl-6 lg:pl-10 space-y-6">
               <div className="space-y-2">
                  <p className="text-3xl">ARSALAN</p>
                  <p className="text-6xl">Lorem ipsum dolor sit amet. </p>
                  <p className="text-2xl">
                     Elevating your tea experience to new heights.
                  </p>
               </div>
               <button className="border-2 pt-2 pb-2 pl-4 pr-4 border-red-500 bg-transparent text-white hover:bg-red-500 transition-[background] duration-400">
                  EXPLORE
               </button>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="bg-red-600 pl-6 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center">
               <div>
                  <p className="font-size-14px text-white">NEW</p>
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
            <div className="bg-black h-full w-full col-span-1">asdf</div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 h-[100vh]">
            <div className="pl-6 lg:pl-10 h-full w-full col-span-1 flex flex-col gap-4 justify-center items-start ">
               <p className="text-6xl text-black">ARSALAN Products</p>

               <p className="text-2xl text-black">
                  Elevate your tea experience with Turkish Tea Maker, fusing
                  <br />
                  innovation and tradition for authentic flavors sand a sleek
                  design.
               </p>

               <button className="border-2 border-red-600 pt-2 pb-2 pr-4 pl-4 text-black hover:text-white hover:bg-red-600 transition-colors">
                  DISCOVER
               </button>
            </div>
            <div className="bg-black h-full w-full col-span-1">asdf</div>
         </div>
      </div>
   );
}

export default Landing;
