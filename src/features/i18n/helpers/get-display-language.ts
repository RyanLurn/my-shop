import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { getMatchedLanguage } from "@/features/i18n/helpers/get-matched-language";

function getDisplayLanguage(request: NextRequest) {
  const headersObject = Object.fromEntries(request.headers.entries());

  const visitorPreferredLanguages = new Negotiator({
    headers: headersObject,
  }).languages();

  const matchedLanguage = getMatchedLanguage(visitorPreferredLanguages);

  return matchedLanguage;
}

export { getDisplayLanguage };
