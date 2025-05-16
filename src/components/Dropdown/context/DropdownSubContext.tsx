import { createContext, useContext } from "react";
import type { DropdownContextType } from "../types";

export const DropdownSubContext = createContext<DropdownContextType | null>(
  null
);

export function useDropdownSubContext() {
  const ctx = useContext(DropdownSubContext);
  if (!ctx) throw new Error("Sub components must be inside <Dropdown.Sub>");
  return ctx;
}
