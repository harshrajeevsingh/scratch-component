import { useDropdownContext } from "./context/DropdownContext";

// Should add support for svg icon too in futute
export function DropdownTrigger({ children }: { children: string }) {
  const { triggerRef, toggleOpen, open } = useDropdownContext();

  return (
    <div
      onClick={() => toggleOpen(!open)}
      className="flyout-btn"
      ref={triggerRef}
    >
      {children}
    </div>
  );
}
