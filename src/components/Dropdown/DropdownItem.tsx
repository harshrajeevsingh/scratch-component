export function DropdownItem({ children, onSelect }: any) {
  return (
    <li className="flyout-item" onClick={onSelect}>
      {children}
    </li>
  );
}
