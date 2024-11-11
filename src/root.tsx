import React from "react";
import { UserProvider } from "./context/UserContext";
import App from "./App";
const Root = () => {
  return (
    <div>
      <UserProvider>
        <App />
      </UserProvider>
    </div>
  );
};

export default Root;
