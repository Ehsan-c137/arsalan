import { allParts as data } from "@/constant";
import { convertToUrl } from "@/utils/convertToUrl";
import CollectionsItem from "../../collectionsItem";
// import data from "@/app/data.json";

type pageProps = {
   params: {
      slug: string;
   };
};

export default function Page(slug: pageProps) {
   const products = data.find((product) => product.url === slug.params.slug);

   return (
      <div className="flex flex-wrap justify-center md:justify-start gap-8">
         {products?.items.map((item) => {
            const url = convertToUrl(item.title);
            // const url = item.title.replace(/ /g, "-").toLowerCase();
            return (
               <CollectionsItem
                  key={item.title}
                  url={`/parts/${url}`}
                  price={item.price}
                  title={item.title}
                  img={`${item.imgSrc[0]}`}
               />
            );
         })}
      </div>
   );
}
