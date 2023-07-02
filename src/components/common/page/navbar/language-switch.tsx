import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { updateLanguage } from "../../../../settingsSlice";
import { LanguageIcon } from "@heroicons/react/24/outline";

export default function LanguageSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const rlanguage = useSelector((state: RootState) => state.settings.language);
  const [language, setLanguage] = useState(rlanguage);

  useEffect(() => {
    dispatch(updateLanguage(language));
  }, [language]);
  return (
    <details>
      <summary>
        <div className="w-4">
          <LanguageIcon />
        </div>{" "}
        Language
      </summary>
      <ul tabIndex={0} className="">
        <li>
          <span onClick={() => setLanguage("English")}>
            🇬🇧 English {language === "English" ? "✓" : ""}
          </span>
        </li>
        <li>
          <span onClick={() => setLanguage("Français")}>
            🇫🇷 Français {language === "Français" ? "✓" : ""}
          </span>
        </li>
      </ul>
    </details>
  );
}
