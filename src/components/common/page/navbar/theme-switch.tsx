import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { updateTheme } from "../../../../settingsSlice";
import { languages } from "../../../../data/text/languages";

export default function ThemeSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const rTheme = useSelector((state: RootState) => state.settings.theme);
  const [theme, setTheme] = useState(rTheme);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    dispatch(updateTheme(theme as "light" | "dark"));
  }, [theme]);

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].themeSwitch;
  return (
    <div className="flex flex-row" onClick={toggleTheme}>
      <label
        className={`swap swap-rotate ${theme === "dark" && "swap-active"}`}
      >
        <div className="swap-on w-4">
          <MoonIcon />
        </div>
        <div className="swap-off w-4">
          <SunIcon />
        </div>
      </label>
      {theme === "dark" ? text.dark : text.light}
    </div>
  );
}
