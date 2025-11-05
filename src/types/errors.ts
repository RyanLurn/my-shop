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

export type { UnexpectedError, NotFoundError };
