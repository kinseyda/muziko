import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { text } from "stream/consumers";
import LanguageSwitch from "./page/navbar/language-switch";
import ThemeSwitch from "./page/navbar/theme-switch";
import { languages } from "../../data/text/languages";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

export default function SettingsButton() {
  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].settings;

  return (
    <div className="dropdown dropdown-end ">
      <div className="tooltip tooltip-bottom" data-tip={text.settings}>
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar transition transform focus:rotate-[30deg] "
        >
          <div className={`w-10 rounded-full `}>
            <Cog6ToothIcon />
          </div>
        </label>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-md dropdown-content bg-base-200 rounded-box w-64"
      >
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <LanguageSwitch />
        </li>
      </ul>
    </div>
  );
}
