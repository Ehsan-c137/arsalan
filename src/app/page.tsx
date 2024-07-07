import Image from "next/image";
import Landing from "@/pages/landing/Landing";

export default function Home() {
   return (
      <div className="flex min-h-screen flex-col items-center justify-between">
         <Landing />
      </div>
   );
}
