import {
  createContext,
  useContext,
  useState,
  cloneElement,
  isValidElement,
  Children,
} from "react";
import { DropdownContext } from "./context/DropdownContext";

export default function DropdownRoot({
  children,
  open: controlledOpen,
  onOpenChange,
}: any) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const toggleOpen = (value) => {
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
