// src/App.tsx
import React from "react";
import UserTable from "./components/userTable";
import ThemeToggle from "./components/themeToggle";

import { useUserContext } from "./context/UserContext";

const App: React.FC = () => {
  const { theme, toggleTheme } = useUserContext();
  console.log(theme);
  return (
    <>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "dark" : ""
        } bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <header className="p-4 flex m-auto justify-between items-center">
          <h1 className="text-2xl">User Management Dashboard</h1>
          <ThemeToggle />
        </header>
        <main className="p-4">
          <UserTable />
        </main>
      </div>
    </>
  );
};

export default App;
