import { useEffect, useState } from "react";
import {
  BoltSlashIcon,
  MoonIcon,
  PaintBrushIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { ThemeKey, updateTheme } from "../../../../settingsSlice";
import { languages } from "../../../../data/text/languages";

export default function ThemeSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const rTheme = useSelector((state: RootState) => state.settings.theme);
  const [theme, setTheme] = useState(rTheme);

  useEffect(() => {
    dispatch(updateTheme(theme as ThemeKey));
  }, [theme]);

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].themeSwitch;
  return (
    <details>
      <summary>
        <PaintBrushIcon className="w-4" /> {text.theme}
      </summary>
      <ul tabIndex={0} className="">
        <li>
          <span
            className={theme === "light" ? "active" : ""}
            onClick={() => setTheme("light")}
          >
            <SunIcon className="w-4" />
            {text.light}
          </span>
        </li>
        <li>
          <span
            className={theme === "dark" ? "active" : ""}
            onClick={() => setTheme("dark")}
          >
            <MoonIcon className="w-4" />
            {text.dark}
          </span>
        </li>
        <li>
          <span
            className={theme === "oled" ? "active" : ""}
            onClick={() => setTheme("oled")}
          >
            <BoltSlashIcon className="w-4" />
            {text.oled}
          </span>
        </li>
      </ul>
    </details>
  );
}
