import CollectionsItem from "./collectionsItem";
export default function Collections() {
   return (
      <div className="grid lg:grid-cols-3 gap-x-14 gap-y-10">
         {/* {data.map((item) => (
            <CollectionsItem key={item.title} />
         ))} */}
         <CollectionsItem />
         <CollectionsItem />
         <CollectionsItem />
         <CollectionsItem />
         <CollectionsItem />
      </div>
   );
}
