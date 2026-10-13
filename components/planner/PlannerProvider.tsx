"use client";

import dynamic from "next/dynamic";
import { createContext, useCallback, useContext, useState } from "react";

const PlannerModal = dynamic(() => import("./PlannerModal").then((m) => m.PlannerModal), { ssr: false });

type Ctx = { openPlanner: () => void; closePlanner: () => void; isOpen: boolean };
const PlannerContext = createContext<Ctx>({ openPlanner: () => {}, closePlanner: () => {}, isOpen: false });

export function PlannerProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const openPlanner = useCallback(() => setOpen(true), []);
  const closePlanner = useCallback(() => setOpen(false), []);
  return (
    <PlannerContext.Provider value={{ openPlanner, closePlanner, isOpen }}>
      {children}
      {isOpen && <PlannerModal onClose={closePlanner} />}
    </PlannerContext.Provider>
  );
}

export const usePlanner = () => useContext(PlannerContext);
