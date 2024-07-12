import Link from "next/link";
import Image from "next/image";

interface IItem {
   title: string;
   price: string;
   img: string;
   url: string;
}

export default function CollectionsItem({ img, title, price, url }: IItem) {
   return (
      <Link
         href={`${url}`}
         className="gap-2 flex flex-col w-[260px] text-black"
      >
         <Image
            src={img}
            alt={title}
            width={260}
            height={260}
            className="bg-[#f5f5f7] object-contain h-[260px]"
         />
         <div className="w-full">
            <h4 className="text-xl hover:underline">{title}</h4>
            <p className="text-base">${price}</p>
         </div>
      </Link>
   );
}
