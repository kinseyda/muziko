import { english } from "./english";
import { esperanto } from "./esperanto";
import { french } from "./french";
import { Language } from "./schema";

export const languageKeys = ["English", "Français", "Esperanto"];
export type LanguageKey = (typeof languageKeys)[number];

export const languages: { [language in LanguageKey]: Language } = {
  English: english,
  Français: french,
  Esperanto: esperanto,
};
