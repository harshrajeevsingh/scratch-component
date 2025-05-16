import { useRef, useState } from "react";
import { DropdownContext } from "./context/DropdownContext";
import type { DropdownProps } from "./types";

export default function DropdownRoot({
  children,
  open: controlledOpen,
  onOpenChange,
}: DropdownProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const toggleOpen = (value: boolean | ((prev: boolean) => boolean)) => {
    const newVal = typeof value === "function" ? value(open) : value;
    if (isControlled && onOpenChange) {
      onOpenChange(newVal);
    } else {
      setUncontrolledOpen(newVal);
    }
  };

  return (
    <div className="flyout">
      <DropdownContext.Provider
        value={{ open, toggleOpen, triggerRef, contentRef }}
      >
        {children}
      </DropdownContext.Provider>
    </div>
  );
}
