import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function DropdownMenu() {
  //   const [isOpen, setIsOpen] = useState(false);

  function handleEdit() {
    console.log("Editing btn clicked");
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>+</Dropdown.Trigger>
      <Dropdown.Content>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Sub>
          <Dropdown.SubTrigger>Advanced Edit</Dropdown.SubTrigger>
          <Dropdown.SubContent>
            <Dropdown.Item>Edit Image</Dropdown.Item>
            <Dropdown.Item>Edit Title</Dropdown.Item>
          </Dropdown.SubContent>
        </Dropdown.Sub>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
}
