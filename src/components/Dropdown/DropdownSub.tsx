import { useState } from "react";
import { DropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = (value: boolean) => setOpen(value);

  return (
    <DropdownSubContext.Provider value={{ open, toggleOpen }}>
      {children}
    </DropdownSubContext.Provider>
  );
}
