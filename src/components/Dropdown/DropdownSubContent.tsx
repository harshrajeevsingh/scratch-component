import useHoverInstinct from "../../hooks/useHoverIntinct";
import { useDropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSubContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, triggerRef, contentRef, toggleOpen } = useDropdownSubContext();
  const { handleMouseLeave } = useHoverInstinct({
    triggerRef,
    contentRef,
    onHoverLeave: () => toggleOpen(false),
  });

  if (!open) return null;

  return (
    <ul
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={handleMouseLeave}
      className="dropdown-sub-content"
    >
      {children}
    </ul>
  );
}
