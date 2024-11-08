import React from "react";

// Define the types for the props that Sidebar will receive
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`bg-gray-800 text-white w-64 p-5 ${
        isOpen ? "block" : "hidden"
      } md:block`}
    >
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)} // Toggle the isOpen state
      >
        {isOpen ? "Close" : "Open"} Menu
      </button>
      <ul>
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
