import { useTheme } from "../context/ThemeContext";
import { BookText } from "lucide-react";

export default function HomePage() {
  const { darkMode } = useTheme();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <BookText size={28} />
        JavaScript Darslik
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl leading-relaxed">
        Ushbu platforma orqali siz JavaScript dasturlash tilini sodda va
        tushunarli tarzda o‘rganasiz. Har bir dars o‘zbek tilida tushuntirilgan,
        misollar va vizual tushunchalar bilan boyitilgan.
      </p>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Tungi rejim:{" "}
        <strong>{darkMode === "dark" ? "Yoqilgan" : "O‘chiq"}</strong>
      </div>
    </div>
  );
}
