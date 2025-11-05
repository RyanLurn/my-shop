type UnexceptedError = {
  kind: "unexpected";
  message: string;
  error: unknown;
  context?: Record<string, unknown>;
};

export type { UnexceptedError };
