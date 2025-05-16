export type DropdownSubContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
  triggerRef: React.RefObject<HTMLLIElement | null>;
  contentRef: React.RefObject<HTMLUListElement | null>;
};

export type DropdownContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
  triggerRef: React.RefObject<HTMLDivElement | null> /* Might need to change element type in future */;
  contentRef: React.RefObject<HTMLUListElement | null>;
};
export type DropdownProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
