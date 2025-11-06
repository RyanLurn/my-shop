import { APIError } from "better-auth/api";
import { err, ok, type Result } from "neverthrow";
import type { Dictionary } from "@/features/i18n/types";
import type { AuthApiError } from "@/types/errors";

function handleAuthApiError({
  dictionary,
  error,
  context,
}: {
  dictionary: Dictionary;
  error: unknown;
  context?: Record<string, unknown>;
}): Result<AuthApiError, unknown> {
  if (error instanceof APIError) {
    const authApiError: AuthApiError = {
      kind: "auth-api",
      message: dictionary.errors.auth,
      error,
      context,
    };
    console.error(authApiError);

    return ok(authApiError);
  }

  return err(error);
}

export { handleAuthApiError };
