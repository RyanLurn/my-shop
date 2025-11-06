import { headers } from "next/headers";
import { auth } from "@/features/auth";
import "server-only";
import type { User } from "better-auth";
import { err, ok, type Result } from "neverthrow";
import type { NotAuthenticatedError, UnexpectedError } from "@/types/errors";

async function getUser({
  requestIsNotAuthenticatedText,
}: {
  requestIsNotAuthenticatedText: string;
}): Promise<Result<User, NotAuthenticatedError | UnexpectedError>> {
  const requestHeaders = await headers();

  try {
    const getSessionResult = await auth.api.getSession({
      headers: requestHeaders,
    });

    if (!getSessionResult) {
      const notAuthenticatedError: NotAuthenticatedError = {
        kind: "not-authenticated",
        message: requestIsNotAuthenticatedText,
        context: {
          headers: requestHeaders,
        },
      };

      console.warn(notAuthenticatedError);

      return err(notAuthenticatedError);
    }

    return ok(getSessionResult.user);
  } catch (error) {
    const unexpectedError: UnexpectedError = {
      kind: "unexpected",
      message: "Unexpected error",
      error,
      context: {
        headers: requestHeaders,
      },
    };

    console.error(unexpectedError);

    return err(unexpectedError);
  }
}

export { getUser };
