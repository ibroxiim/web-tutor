// src/layouts/MainLayout.jsx
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";

export default function MainLayout() {
  const { darkMode } = useTheme();
  const { isOpen } = useSidebar();

  useEffect(() => {
    const handleResize = () => {};

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-1 pt-16">
        <Sidebar />
        <main
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? "ml-64" : "ml-0"
          } flex-1 min-h-screen ${
            darkMode ? "bg-zinc-950 text-white" : "bg-gray-50 text-black"
          } p-6 overflow-y-auto`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
