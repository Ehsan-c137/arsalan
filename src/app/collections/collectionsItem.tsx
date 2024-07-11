import Link from "next/link";
import Image from "next/image";

interface IItem {
   title: string;
   price: string;
   img: string;
}

export default function CollectionsItem({ img, title, price }: IItem) {
   return (
      <Link href={"/"} className="gap-2 flex flex-col w-[260px]">
         <Image
            src={img}
            alt={title}
            width={250}
            height={250}
            className="bg-slate-300"
         />
         <div className="w-full truncate">
            <h4 className="text-xl">{title}</h4>
            <p className="text-base">{price}$</p>
         </div>
      </Link>
   );
}
