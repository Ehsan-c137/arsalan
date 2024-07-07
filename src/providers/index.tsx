"use client";

import DrawerContextProvider, { useDrawer } from "@/context/drawerContext";
import ReactQueryProvider from "./ReactQueryProvier";

export default function Providers({ children }: { children: React.ReactNode }) {
   return (
      <>
         <ReactQueryProvider>
            <DrawerContextProvider>{children}</DrawerContextProvider>
         </ReactQueryProvider>
      </>
   );
}
