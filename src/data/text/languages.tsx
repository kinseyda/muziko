import { english } from "./english";
import { french } from "./french";
import { Language } from "./schema";

export type LanguageKey = "English" | "Français";

export const languages: { [language in LanguageKey]: Language } = {
  English: english,
  Français: french,
};
