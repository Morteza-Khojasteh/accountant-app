import React, { useState } from "react";
// import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./App.css";
import DropdownButton from "./DropdownButton";

const App: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // State to toggle menu visibility

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-1 h-12 bg-blue-500">
        <div className="col-span-1">
          <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        {/* Empty middle column */}
        <div className="col-span-1"></div>

        {/* DropdownButton in the third column */}
        <div className="col-span-1">
          <DropdownButton />
        </div>
      </div>
      <main className="flex-1 p-4 bg-gray-100">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
