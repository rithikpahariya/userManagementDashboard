import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: number;
  name: string;
  email: string;
  company: { name: string };
  address: { street: string; city: string };
  phone: string;
}

interface UserContextType {
  users: User[];
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: "light" | "dark";
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark");
  };

  return (
    <UserContext.Provider value={{ users, isDarkMode, toggleTheme, theme }}>
      {children}
    </UserContext.Provider>
  );
};
