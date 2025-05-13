import { useDropdownSubContext } from "./context/DropdownSubContext";

export function DropdownSubContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open } = useDropdownSubContext();
  return open ? <ul className="flyout-list">{children}</ul> : null;
}
