export type DropdownContextType = {
  open: boolean;
  toggleOpen: (value: boolean) => void;
};

export type DropdownProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
