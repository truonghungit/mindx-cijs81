import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Footer, Home, Login } from "./Components";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Login />
        <Home />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
