import { createContext, useContext } from "react";
import type { DropdownContextType } from "../types";

export const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("FlyOut components must be wrapped in <FlyOut />");
  return ctx;
}
