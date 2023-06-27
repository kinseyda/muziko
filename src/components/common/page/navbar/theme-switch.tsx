import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { updateTheme } from "../../../../settingsSlice";

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
