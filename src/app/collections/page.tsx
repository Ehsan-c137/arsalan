import CollectionsItem from "./collectionsItem";
export default function Collections() {
   return (
      <div className="flex flex-col gap-8">
         <p className="text-2xl">ELECTRIC KETTLES</p>
         <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
            {/* <CollectionsItem />
            <CollectionsItem /> */}
         </div>
         <p className="text-2xl">TEA MAKER</p>
         <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
            {/* <CollectionsItem />
            <CollectionsItem /> */}
         </div>

         <p className="text-2xl">COFFEE MAKERS</p>
         <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
            {/* <CollectionsItem />
            <CollectionsItem /> */}
         </div>
         <p className="text-2xl">SAMOVARS</p>
         <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
            {/* <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem /> */}
         </div>
         <p className="text-2xl">BREAD MAKERS</p>
         <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
            {/* <CollectionsItem />
            <CollectionsItem />
            <CollectionsItem /> */}
         </div>
      </div>
   );
}
