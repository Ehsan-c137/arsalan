"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

interface IDrawer {
   isOpen: boolean;
   setIsOpen: (value: boolean) => void;
}

const DrawerContext = createContext<IDrawer | null>(null);

export default function DrawerContextProvider({
   children,
}: {
   children: React.ReactNode;
}) {
   const [isOpen, setIsOpen] = useState(false);

   const contextValue: IDrawer = {
      isOpen,
      setIsOpen,
   };

   return (
      <DrawerContext.Provider value={contextValue}>
         {children}
      </DrawerContext.Provider>
   );
}

export function useDrawer() {
   const context = useContext(DrawerContext);

   if (context === null) {
      throw new Error("useDrawer must be in Provider");
   }
   return context;
}
