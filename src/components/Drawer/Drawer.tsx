import { useDrawer } from "@/context/drawerContext";

export default function DrawerComponent() {
   const { isOpen, setIsOpen } = useDrawer();
   return (
      <>
         <div
            onClick={() => setIsOpen(false)}
            className={`${
               isOpen ? "opacity-80" : "left-[-200%] opacity-0"
            } top-0 fixed w-full h-full bg-gray-500  overflow-hidden z-8`}
         ></div>
         <div
            onBlur={() => setIsOpen(false)}
            className="fixed bg-white top-0 w-[90%] md:w-[30%] h-full transition-[left] duration-500 pt-24 pr-6 pl-6 pb-6"
            style={{
               left: isOpen ? "0%" : "-100%",
               zIndex: 9,
            }}
         >
            <div className="flex flex-col">
               <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempora, quis.
                  <a
                     href="#"
                     className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
                  >
                     limited-time sale
                  </a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati inventore ratione animi, nisi iste repellendus
                  officiis voluptatum asperiores vitae saepe!
               </p>
               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <a
                     href="#"
                     className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                     Learn more
                  </a>
               </div>
            </div>
         </div>
      </>
   );
}
