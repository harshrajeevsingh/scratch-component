import type React from "react";
import { useDropdownContext } from "./context/DropdownContext";
import useClickOutside from "../../hooks/useClickOutside";

export function DropdownContent({ children }: { children: React.ReactNode }) {
  const { contentRef, triggerRef, open, toggleOpen } = useDropdownContext();

  useClickOutside([contentRef, triggerRef], () => toggleOpen(false));

  if (!open) return null;

  return (
    <ul className="flyout-list" ref={contentRef}>
      {children}
    </ul>
  );
}
