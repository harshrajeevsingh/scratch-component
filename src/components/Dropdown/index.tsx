import { DropdownTrigger } from "./DropdownTrigger";
import { DropdownContent } from "./DropdownContent";
import { DropdownItem } from "./DropdownItem";
import DropdownRoot from "./Dropdown";
import { DropdownSub } from "./DropdownSub";
import { DropdownSubTrigger } from "./DropdownSubTrigger";
import { DropdownSubContent } from "./DropdownSubContent";

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Sub: DropdownSub,
  SubTrigger: DropdownSubTrigger,
  SubContent: DropdownSubContent,
});

export default Dropdown;
