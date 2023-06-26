import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      <input
        onClick={toggleTheme}
        type="checkbox"
        defaultChecked={theme === "dark"}
      />
      <div className="swap-on w-8">
        <MoonIcon />
      </div>
      <div className="swap-off w-8">
        <SunIcon />
      </div>
    </label>
  );
}
