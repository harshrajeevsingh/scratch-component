import { useDropdownContext } from "./context/DropdownContext";

export function DropdownContent({ children }: any) {
  const { open } = useDropdownContext();

  if (!open) return null;

  return <ul className="flyout-list">{children}</ul>;
}
