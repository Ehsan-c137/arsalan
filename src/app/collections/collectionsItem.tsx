import Link from "next/link";
import Image from "next/image";

interface IItem {
   title: string;
   price: string;
   imgSrc: string;
}

export default function CollectionsItem({ imgSrc, title, price }: IItem) {
   return (
      <Link href={"/"} className="space-y-2 grid">
         <Image
            src={"/"}
            alt=""
            width={250}
            height={250}
            className="bg-slate-300"
         />
         <div className="flex flex-col">
            <h4 className="text-xl">Bread maker</h4>
            <p className="text-base">95$</p>
         </div>
      </Link>
   );
}
