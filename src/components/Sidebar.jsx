import { Home, Code, BookOpen, Settings } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useSidebar } from "../context/SidebarContext";
import lessons from "../data/lessons";
import { Link } from "react-router-dom";

const staticMenuItems = [
  { id: 1, name: "Home", icon: Home, path: "/" },
  //   { id: 5, name: "Settings", icon: Settings, path: "/settings" },
];

const categoryIcons = {
  "Javascript Basics": Code,
  "Advanced JS": BookOpen,
  "React Tutorial": Code,
};

const Sidebar = () => {
  const { darkMode } = useTheme();
  const { isOpen } = useSidebar();

  // Kategoriyalar bo‘yicha darslarni guruhlash
  const categorizedLessons = lessons.reduce((acc, lesson) => {
    acc[lesson.category] = acc[lesson.category] || [];
    acc[lesson.category].push(lesson);
    return acc;
  }, {});

  return (
    <div
      className={`fixed top-16 left-0 h-full transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-0"
      } overflow-hidden ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="py-4">
        {/* Static items */}
        {staticMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.path}
              key={item.id}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
            >
              <Icon size={20} className="mr-3" />
              <span>{item.name}</span>
            </Link>
          );
        })}

        {/* Dynamic lessons by category */}
        {Object.entries(categorizedLessons).map(([category, items], idx) => {
          const Icon = categoryIcons[category] || BookOpen;
          return (
            <div key={category}>
              <div className="flex items-center px-4 py-3 font-semibold">
                <Icon size={18} className="mr-2" />
                Mavzular
              </div>
              {items.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/lesson/${lesson.id}`}
                  className={`flex items-center px-8 py-2 text-sm cursor-pointer ${
                    darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
                  }`}
                >
                  • {lesson.title}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
