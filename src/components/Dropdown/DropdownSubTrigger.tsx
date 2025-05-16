import useHoverInstinct from "../../hooks/useHoverIntinct";
import { useDropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSubTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { triggerRef, contentRef, toggleOpen } = useDropdownSubContext();

  const { handleMouseLeave } = useHoverInstinct({
    triggerRef,
    contentRef,
    onHoverLeave: () => toggleOpen(false),
  });
  return (
    <li
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={handleMouseLeave}
      role="menuitem"
      tabIndex={0}
      className="flyout-item dropdown-sub-trigger"
    >
      {children}
    </li>
  );
}
