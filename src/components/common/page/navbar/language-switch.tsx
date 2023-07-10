import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { updateLanguage } from "../../../../settingsSlice";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { languageKeys, languages } from "../../../../data/text/languages";

export default function LanguageSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const rlanguage = useSelector((state: RootState) => state.settings.language);
  const [language, setLanguage] = useState(rlanguage);

  useEffect(() => {
    dispatch(updateLanguage(language));
  }, [language]);

  const languageKey = useSelector(
    (state: RootState) => state.settings.language
  );
  const text = languages[languageKey].languageSwitch;
  return (
    <details>
      <summary>
        <div className="w-4">
          <LanguageIcon />
        </div>{" "}
        {text.language}
      </summary>
      <ul tabIndex={0} className="">
        {languageKeys.map((x) => (
          <li key={x}>
            <span
              className={language === x ? "active" : ""}
              onClick={() => setLanguage(x)}
            >
              {x}
            </span>
          </li>
        ))}
      </ul>
    </details>
  );
}
