import Negotiator from "negotiator";
import { getMatchedLanguage } from "@/features/i18n/helpers/get-matched-language";

function getDisplayLanguage(headers: Headers) {
  const headersObject = Object.fromEntries(headers.entries());

  const visitorPreferredLanguages = new Negotiator({
    headers: headersObject,
  }).languages();

  const matchedLanguage = getMatchedLanguage(visitorPreferredLanguages);

  return matchedLanguage;
}

export { getDisplayLanguage };
