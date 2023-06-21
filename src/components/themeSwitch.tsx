import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeSwitch() {
  return (
    <label className="swap swap-rotate btn btn-ghost btn-circle">
      <input type="checkbox" />
      <div className="swap-on w-8">
        <MoonIcon data-set-theme="dark" />
      </div>
      <div className="swap-off w-8">
        <SunIcon data-set-theme="light" />
      </div>
    </label>
  );
}
