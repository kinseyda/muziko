import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import ThemeSwitch from "./theme-switch";
import LanguageSwitch from "./language-switch";

export default function SettingsButton() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className={`w-10 rounded-full `}>
          <Cog6ToothIcon />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
