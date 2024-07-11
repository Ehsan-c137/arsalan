import CollectionsItem from "./collectionsItem";
import { allProducts } from "@/constant";

export default function Collections() {
   return (
      <div className="flex flex-col gap-10">
         {allProducts.map((products) => {
            return (
               <div className="flex flex-col gap-8" key={products.category}>
                  <p className="text-2xl tracking-wider">{products.category}</p>
                  <div className="grid lg:grid-cols-3 gap-x-14 gap-y-16">
                     {products.items.map((item) => (
                        <CollectionsItem
                           key={item.title}
                           price={item.price}
                           title={item.title}
                           img={`${item.imgSrc}`}
                        />
                     ))}
                  </div>
               </div>
            );
         })}
      </div>
   );
}
