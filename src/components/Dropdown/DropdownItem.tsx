import type React from "react";
import { useDropdownContext } from "./context/DropdownContext";

type DropdownItemType = {
  children: React.ReactNode;
  onClick?: () => void;
};
export function DropdownItem({ children, onClick }: DropdownItemType) {
  const { toggleOpen } = useDropdownContext();
  function handleClick() {
    if (onClick) {
      onClick();
      toggleOpen(false);
    }
  }

  return (
    <li className="flyout-item" onClick={handleClick}>
      {children}
    </li>
  );
}
