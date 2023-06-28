import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { updateLanguage } from "../../../../settingsSlice";
import { LanguageIcon } from "@heroicons/react/24/outline";

export default function LanguageSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const rlanguage = useSelector((state: RootState) => state.settings.language);
  const [language, setLanguage] = useState(rlanguage);
  const toggleLanguage = () => {
    setLanguage(language === "English" ? "Français" : "English");
  };

  useEffect(() => {
    dispatch(updateLanguage(language));
  }, [language]);
  return (
    <div className="flex flex-row" onClick={toggleLanguage}>
      <div className="w-8">
        <LanguageIcon />
      </div>
      <label className={`swap ${language === "Français" && "swap-active"}`}>
        <div className="swap-off w-8 whitespace-nowrap ">🇬🇧 English</div>
        <div className="swap-on w-8 whitespace-nowrap ">🇫🇷 Français</div>
      </label>
    </div>
  );
}
