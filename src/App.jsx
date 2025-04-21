// src/App.jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LessonPage from "./pages/LessonPage";
import HomePage from "./pages/HomePage";

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "lesson/:lessonId", element: <LessonPage /> },
    ],
  },
]);

export default function App() {
  // No need for ThemeProvider here as it's now in index.jsx
  return <RouterProvider router={router} />;
}
