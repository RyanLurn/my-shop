import { match } from "@formatjs/intl-localematcher";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/features/i18n/consts";

function getMatchedLanguage(visitorPreferredLanguages: string[]) {
  const matchedLanguage = match(
    visitorPreferredLanguages,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE
  );

  return matchedLanguage;
}

export { getMatchedLanguage };
