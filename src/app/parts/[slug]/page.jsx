import data from "@/app/data.json";

export default function page({ params }) {
   const url = params.slug?.split("/").pop();
   const product = data.parts.find((p) => {
      const path = p.title.replace(/ /g, "-").toLowerCase();
      return path === url;
   });

   return (
      <div className="min-h-[100vh]">
         <p>{product?.title}</p>
         <p>{product?.price}</p>
      </div>
   );
}
