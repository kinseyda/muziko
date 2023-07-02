import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";

export default function SettingsButton() {
  return (
    <div className="dropdown dropdown-end ">
      <label
        tabIndex={0}
        className="btn btn-ghost btn-circle avatar transition transform focus:rotate-[30deg] "
      >
        <div className={`w-10 rounded-full `}>
          <Cog6ToothIcon />
        </div>
      </label>
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
