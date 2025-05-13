import { useDropdownContext } from "./context/DropdownContext";

export function DropdownTrigger({ children }) {
  const { toggleOpen, open } = useDropdownContext();

  return (
    <div onClick={() => toggleOpen(!open)} className="flyout-btn">
      {children}
    </div>
  );
}
