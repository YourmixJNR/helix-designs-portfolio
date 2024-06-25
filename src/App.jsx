import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Error from "./Pages/Error";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Routes>
          <Route exact path={"/"} element={<Landing />} />
          <Route exact path={"*"} element={<Error />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

