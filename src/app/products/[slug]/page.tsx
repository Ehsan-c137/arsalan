import Accordion from "@/components/Accordion/Accordion";

export default function Page() {
   return (
      <div className="min-h-[100vh] pt-28">
         <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1 bg-yellow-200">asdf</div>
            <div className="col-span-1">
               <h1 className="text-4xl ">Bread Maker Kneading Paddles</h1>
               <p className="text-4xl">12$</p>
               <button className="rounded-full w-full bg-blue-500 font-size-18px p-2 text-white">
                  Add To Cart
               </button>
               <Accordion heading="Description">ASDFASDF</Accordion>
               <Accordion heading="Details">ASDFASDF</Accordion>
            </div>
         </div>
         <div>reserved</div>
      </div>
   );
}
