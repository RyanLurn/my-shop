import { match } from "@formatjs/intl-localematcher";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/features/i18n/consts";
import { supportedLanguageSchema } from "@/features/i18n/validators";

function getMatchedLanguage(visitorPreferredLanguages: string[]) {
  const matchedLanguage = match(
    visitorPreferredLanguages,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE
  );

  const validatedLanguage = supportedLanguageSchema.parse(matchedLanguage);

  return validatedLanguage;
}

export { getMatchedLanguage };
