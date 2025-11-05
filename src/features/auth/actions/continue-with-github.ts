"use server";

import { headers } from "next/headers";
import { auth } from "@/features/auth";
import type { UnexpectedError } from "@/types/errors";

async function continueWithGithub() {
  const webHeaders = await headers();
  try {
    await auth.api.signInSocial({
      headers: webHeaders,
      body: {
        provider: "github",
      },
    });

    return { errors: [] };
  } catch (error) {
    const errorMessage =
      "Unexpected error occurred while signing in with GitHub";
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
