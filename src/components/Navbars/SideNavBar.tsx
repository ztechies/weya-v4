'use client'
// SideNavbar.tsx
import React from 'react';
import GlobalLoader from '../Loaders/GlobalLoader';

const SideNavbar = ({
  isSidebarOpen,
  handleRouteChange,
  isLoading,
  ComponentToRender,
  selectedBot
}: {
  handleRouteChange: (e: React.MouseEvent<HTMLButtonElement>) => void,
  isSidebarOpen: boolean,
  isLoading: boolean,
  ComponentToRender: React.FC | ((props: {
    botNumber: string;
}) => JSX.Element),
  selectedBot: string[]
}) => {
  return (
    <div className="flex flex-grow">
      <div
        className={`w-64 md:w-1/5 h-full bg-black flex flex-col items-center p-5 border-r-2 border-[#345830] fixed md:relative z-10 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out`}
        style={{ minWidth: isSidebarOpen ? "16rem" : "4rem" }} // Adjust the minWidth based on your design
      >
        <ul className="flex flex-col text-center text-lg gap-5 w-full flex-wrap">
          {["first", "second", "third", "fourth"].map((bot) => (
            <button
              key={bot}
              value={`/chat/${bot}`}
              onClick={handleRouteChange}
            >
              <li className="border-2 border-[#345830] rounded-xl text-white bg-gradient-to-r from-[#345830] to-black p-4">
                {bot === "voice-bot" ? "Weya Voice Bot" : `Bot ${bot.charAt(0).toUpperCase() + bot.slice(1)}`}
              </li>
            </button>
          ))}
        </ul>
      </div>
      <main className={`flex-grow flex justify-center items-center bg-black p-5 overflow-y-auto ${isSidebarOpen ? "md:ml-64" : "ml-0"} transition-all duration-300`}>
        {isLoading ? <GlobalLoader /> : <ComponentToRender botNumber={selectedBot[2]} />}
      </main>
    </div>
  );
};

export default SideNavbar;
