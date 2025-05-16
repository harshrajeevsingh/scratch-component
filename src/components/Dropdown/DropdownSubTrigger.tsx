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
      //   onClick={() => toggleOpen((prev) => !prev)}
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      className="flyout-item dropdown-sub-trigger"
    >
      {children}
    </li>
  );
}
