import { allProducts } from "@/constant";
import CollectionsItem from "../../collectionsItem";

type pageProps = {
   params: {
      slug: string;
   };
};

export default function Page(slug: pageProps) {
   const products = allProducts.find(
      (product) => product.url === slug.params.slug
   );

   return (
      <div className="flex flex-wrap gap-8">
         {products?.items.map((item) => {
            const url = item.title.replace(/ /g, "-");
            return (
               <CollectionsItem
                  key={item.title}
                  url={`/products/${url}`}
                  price={item.price}
                  title={item.title}
                  img={`${item.imgSrc[0]}`}
               />
            );
         })}
      </div>
   );
}
