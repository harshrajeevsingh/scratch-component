import { createContext, useContext } from "react";

type DropdownContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
};
export const DropdownContext = createContext<DropdownContextType | null>(null);

export function useDropdownContext() {
  const ctx = useContext(DropdownContext);
  if (!ctx) throw new Error("FlyOut components must be wrapped in <FlyOut />");
  return ctx;
}
