"use server";

import { headers } from "next/headers";
import { auth } from "@/features/auth";
import { handleAuthApiError } from "@/features/auth/helpers/handle-auth-api-error";
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
    const handleAuthApiErrorResult = handleAuthApiError({
      dictionary,
      error,
      context: {
        location: "Continue with GitHub server action",
        headers: webHeaders,
      },
    });
    if (handleAuthApiErrorResult.isOk()) {
      return { errors: [handleAuthApiErrorResult.value.message] };
    }

    const errorMessage = dictionary.errors.unexpected.continueWithGithub;
    const errorLog: UnexpectedError = {
      kind: "unexpected",
      message: errorMessage,
      error,
      context: {
        location: "Continue with GitHub server action",
        headers: webHeaders,
      },
    };
    console.error(errorLog);

    return { errors: [errorMessage] };
  }
}

export { continueWithGithub };
