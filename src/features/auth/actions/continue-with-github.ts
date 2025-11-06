"use server";

import { headers } from "next/headers";
import { auth } from "@/features/auth";
import { getDictionary } from "@/features/i18n/helpers/get-dictionary";
import { getDisplayLanguage } from "@/features/i18n/helpers/get-display-language";
import type { UnexpectedError } from "@/types/errors";

async function continueWithGithub() {
  const webHeaders = await headers();
  const displayLanguage = getDisplayLanguage(webHeaders);
  const dictionary = await getDictionary(displayLanguage);

  try {
    await auth.api.signInSocial({
      headers: webHeaders,
      body: {
        provider: "github",
      },
    });

    return { errors: [] };
  } catch (error) {
    const errorMessage = dictionary.errors.unexpected.continueWithGithub;
    const errorLog: UnexpectedError = {
      kind: "unexpected",
      message: errorMessage,
      error,
      context: {
        headers: webHeaders,
      },
    };
    console.error(errorLog);

    return { errors: [errorMessage] };
  }
}

export { continueWithGithub };
