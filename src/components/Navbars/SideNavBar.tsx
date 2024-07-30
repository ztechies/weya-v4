'use client'
// SideNavbar.tsx
import React from 'react';

const SideNavbar = ({
  isSidebarOpen,
  handleRouteChange
}: {
  handleRouteChange: (e: React.MouseEvent<HTMLButtonElement>) => void,
  isSidebarOpen: boolean,
}) => {
  return (
    <div
      className={`w-64 md:w-1/5 h-full bg-black flex flex-col items-center p-5 border-r-2 border-[#345830] fixed md:relative z-10 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      style={{ minWidth: isSidebarOpen ? "16rem" : "4rem" }} // Adjust the minWidth based on your design
    >
      <ul className="flex flex-col text-center text-lg gap-5 w-full flex-wrap">
        {["first", "second", "third"].map((bot) => (
          <button
            key={bot}
            value={`/chat/${bot}`}
            onClick={handleRouteChange}
          >
            <li className="border-2 border-[#345830] rounded-xl text-white bg-gradient-to-r from-[#345830] to-black p-4">
              {`${bot.charAt(0).toUpperCase() + bot.slice(1)} Bot`}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
