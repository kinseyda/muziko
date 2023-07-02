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
        <PaintBrushIcon className="w-4" /> Theme
      </summary>
      <ul tabIndex={0} className="">
        <li>
          <span onClick={() => setTheme("light")}>
            <SunIcon className="w-4" />
            {text.light} {theme === "light" ? "✓" : ""}
          </span>
        </li>
        <li>
          <span onClick={() => setTheme("dark")}>
            <MoonIcon className="w-4" />
            {text.dark} {theme === "dark" ? "✓" : ""}
          </span>
        </li>
        <li>
          <span onClick={() => setTheme("oled")}>
            <BoltSlashIcon className="w-4" />
            {text.oled} {theme === "oled" ? "✓" : ""}
          </span>
        </li>
      </ul>
    </details>
  );
}
