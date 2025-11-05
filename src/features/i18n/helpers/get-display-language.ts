import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/features/i18n/consts";

function getDisplayLanguage(request: NextRequest) {
  const headersObject = Object.fromEntries(request.headers.entries());

  const visitorPreferredLanguages = new Negotiator({
    headers: headersObject,
  }).languages();

  const matchedLanguage = match(
    visitorPreferredLanguages,
    SUPPORTED_LANGUAGES,
    DEFAULT_LANGUAGE
  );

  return matchedLanguage;
}

export { getDisplayLanguage };
