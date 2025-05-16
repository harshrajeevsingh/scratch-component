import { useRef, useState } from "react";
import { DropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSub({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = (value: boolean) => setOpen(value);
  const triggerRef = useRef<HTMLLIElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);

  return (
    <DropdownSubContext.Provider
      value={{ open, toggleOpen, triggerRef, contentRef }}
    >
      {children}
    </DropdownSubContext.Provider>
  );
}
