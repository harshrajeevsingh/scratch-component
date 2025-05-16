import type React from "react";
import { useDropdownContext } from "./context/DropdownContext";

export function DropdownContent({ children }: { children: React.ReactNode }) {
  const { open } = useDropdownContext();

  if (!open) return null;

  return <ul className="flyout-list">{children}</ul>;
}
