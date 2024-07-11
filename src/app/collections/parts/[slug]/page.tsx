import { allParts as data } from "@/constant";
import CollectionsItem from "../../collectionsItem";

type pageProps = {
   params: {
      slug: string;
   };
};

export default function Page(slug: pageProps) {
   const products = data.find((product) => product.url === slug.params.slug);

   return (
      <div className="flex flex-wrap gap-8">
         {products?.items.map((item) => (
            <CollectionsItem
               key={item.title}
               price={item.price}
               title={item.title}
               img={`${item.imgSrc}`}
            />
         ))}
      </div>
   );
}
