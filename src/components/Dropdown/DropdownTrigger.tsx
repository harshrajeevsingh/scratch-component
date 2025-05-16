import { useDropdownContext } from "./context/DropdownContext";

// Should add support for svg icon too in futute
export function DropdownTrigger({ children }: { children: string }) {
  const { toggleOpen, open } = useDropdownContext();

  return (
    <div onClick={() => toggleOpen(!open)} className="flyout-btn">
      {children}
    </div>
  );
}
