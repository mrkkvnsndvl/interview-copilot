import { BotIcon, ChevronLeftIcon, SettingsIcon, XIcon } from "lucide-react";

import { Link, useLocation } from "@tanstack/react-router";

export default function Header() {
  const location = useLocation();
  const isSettingsPage = location.pathname === "/settings";

  const handleCloseClick = () => {
    window.close(); // This will close the extension popup
  };

  return (
    <header className="flex flex-row items-center w-full border-b-1 h-[72px]">
      <div className="flex flex-row items-center w-full gap-3 pt-6 pb-6 pl-6">
        <BotIcon className="w-6 h-6" />
        <span className="text-base font-bold">
          {isSettingsPage
            ? "Interview Copilot | Settings"
            : "Interview Copilot"}
        </span>
      </div>
      <Link
        className="flex flex-row items-center p-6 border-l border-r group hover:bg-black"
        to={`${isSettingsPage ? "/" : "/settings"}`}
        draggable="false"
      >
        {isSettingsPage ? (
          <ChevronLeftIcon className="w-6 h-6 group-hover:text-white" />
        ) : (
          <SettingsIcon className="w-6 h-6 group-hover:text-white" />
        )}
      </Link>
      <button
        className="flex flex-row items-center p-6 cursor-pointer hover:bg-black group"
        onClick={handleCloseClick} // Add the onClick handler
      >
        <XIcon className="w-6 h-6 group-hover:text-white" />
      </button>
    </header>
  );
}
