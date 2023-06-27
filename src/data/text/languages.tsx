import { english } from "./english";
import { french } from "./french";
import { Language } from "./schema";

export type LanguageKey = "English" | "French";

export const languages: { [language in LanguageKey]: Language } = {
  English: english,
  French: french,
};
