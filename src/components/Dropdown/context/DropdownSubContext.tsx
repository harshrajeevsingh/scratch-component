import { createContext, useContext } from "react";

type DropdownSubContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
};
export const DropdownSubContext = createContext<DropdownSubContextType | null>(
  null
);

export function useDropdownSubContext() {
  const ctx = useContext(DropdownSubContext);
  if (!ctx) throw new Error("Sub components must be inside <Dropdown.Sub>");
  return ctx;
}
