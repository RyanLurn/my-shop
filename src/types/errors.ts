import type { APIError } from "better-auth/api";

type UnexpectedError = {
  kind: "unexpected";
  message: string;
  error: unknown;
  context?: Record<string, unknown>;
};

type NotFoundError = {
  kind: "not-found";
  message: string;
  context?: Record<string, unknown>;
};

type AuthApiError = {
  kind: "auth-api";
  message: string;
  error: APIError;
  context?: Record<string, unknown>;
};

type NotAuthenticatedError = {
  kind: "not-authenticated";
  message: string;
  context?: Record<string, unknown>;
};

export type {
  UnexpectedError,
  NotFoundError,
  AuthApiError,
  NotAuthenticatedError,
};
