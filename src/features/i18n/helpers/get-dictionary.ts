import type { SupportedLanguage } from "@/features/i18n/types";
import "server-only";

const dictionaries = {
  en: () =>
    import("@/features/i18n/dictionaries/en").then(
      (module) => module.enDictionary
    ),
  vi: () =>
    import("@/features/i18n/dictionaries/vi").then(
      (module) => module.viDictionary
    ),
};

function getDictionary(lang: SupportedLanguage) {
  return dictionaries[lang]();
}

export { getDictionary };
