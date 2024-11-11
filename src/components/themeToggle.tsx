// src/components/ThemeToggle.tsx
import React from "react";
import { useUserContext } from "../context/UserContext";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useUserContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded-md"
    >
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};

export default ThemeToggle;
