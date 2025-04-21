// src/pages/LessonPage.jsx
import { useParams, Link } from "react-router-dom";
import lessons from "../data/lessons";
import { BookOpen, Clock, ChevronLeft, ChevronRight } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";

export default function LessonPage() {
  const { lessonId } = useParams();
  //   const { darkMode } = useTheme();

  // Check if lessonId exists in the list
  const currentIndex = lessons.findIndex((l) => l.id === lessonId);

  // If index not found, show "not found"
  if (currentIndex === -1) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="text-red-500 text-xl font-bold mb-2">
          Dars topilmadi 😢
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Kechirasiz, siz izlagan dars mavjud emas
        </p>
      </div>
    );
  }

  const lesson = lessons[currentIndex];
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const wordCount = lesson.explanation
    ? lesson.explanation.split(/\s+/).length
    : 0;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <div className="flex items-center mr-4">
            <BookOpen size={16} className="mr-1" />
            <span>{lesson.category || "Darslik"}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{readingTime} daqiqa o'qish</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
        {lesson.description && (
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {lesson.description}
          </p>
        )}
      </div>

      {/* Main content */}
      <div className="prose max-w-none dark:prose-invert">
        {lesson.image && (
          <div className="mb-6">
            <img
              src={lesson.image}
              alt={lesson.title}
              className="rounded-xl shadow-lg w-full object-cover container"
            />
          </div>
        )}

        {lesson.explanation &&
          lesson.explanation.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}

        {lesson.codeExamples &&
          lesson.codeExamples.map((code, i) => (
            <div key={i} className="my-6">
              <div className="p-4 rounded-lg font-mono text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                <pre>{code}</pre>
              </div>
            </div>
          ))}
      </div>

      {/* Lesson navigation */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between">
          {prevLesson ? (
            <Link
              to={`/lesson/${prevLesson.id}`}
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ChevronLeft size={20} className="mr-1" />
              <span>Oldingi: {prevLesson.title}</span>
            </Link>
          ) : (
            <div></div>
          )}

          {nextLesson && (
            <Link
              to={`/lesson/${nextLesson.id}`}
              className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <span>Keyingi: {nextLesson.title}</span>
              <ChevronRight size={20} className="ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
