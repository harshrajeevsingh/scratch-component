import { useDropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSubTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleOpen } = useDropdownSubContext();
  return (
    <li
      role="menuitem"
      tabIndex={0}
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      className="flyout-btn"
    >
      {children}
    </li>
  );
}
