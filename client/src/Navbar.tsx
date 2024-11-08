import React from "react";

// Define the types for the props that Navbar will receive
interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="bg-blue-500 p-4 flex justify-between items-center w-14 h-12">
      {/* Logo or Title */}
      <div className="text-white text-xl"></div>

      {/* Hamburger Icon - Visible on mobile */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu visibility
      >
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Navigation Links - Visible on desktop and when menu is open on mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute inset-0 bg-gray-800 bg-opacity-75 md:bg-transparent md:flex md:justify-end md:items-center md:w-auto md:h-auto p-4 w-32 mt-12`}
      >
        <ul className="space-x-4 md:flex md:space-x-6 text-white">
          <li>
            <a href="#" className="hover:text-gray-300">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
