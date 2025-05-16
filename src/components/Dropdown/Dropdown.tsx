import {
  createContext,
  useContext,
  useState,
  cloneElement,
  isValidElement,
  Children,
} from "react";
import { DropdownContext } from "./context/DropdownContext";
import type { DropdownProps } from "./types";

export default function DropdownRoot({
  children,
  open: controlledOpen,
  onOpenChange,
}: DropdownProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const toggleOpen = (value: boolean | ((prev: boolean) => boolean)) => {
    const newVal = typeof value === "function" ? value(open) : value;
    isControlled ? onOpenChange?.(newVal) : setUncontrolledOpen(newVal);
  };

  return (
    <div className="flyout">
      <DropdownContext.Provider value={{ open, toggleOpen }}>
        {children}
      </DropdownContext.Provider>
    </div>
  );
}
