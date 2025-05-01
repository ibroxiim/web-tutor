// src/layouts/MainLayout.jsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import { BookLoaderComponent } from "./../components/BookLoaderComponent";

export default function MainLayout() {
  const { darkMode } = useTheme();
  const { isOpen } = useSidebar();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {};

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isLoading ? (
    <BookLoaderComponent />
  ) : (
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
