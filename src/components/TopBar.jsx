// src/components/TopBar.js
import { Moon, Sun } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";
import { useTheme } from "../context/ThemeContext";

const SidebarToggle = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="p-2 rounded-lg cursor-pointer">
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      )}
    </button>
  );
};

const TopBar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`w-full h-16 fixed top-0 left-0 flex items-center justify-between px-4 z-10 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md`}
    >
      <div className="flex items-center">
        <SidebarToggle />
        <h1 className="text-xl font-bold ml-4">JS Learning Platform</h1>
      </div>
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full cursor-pointer ${
          darkMode
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

export default TopBar;
