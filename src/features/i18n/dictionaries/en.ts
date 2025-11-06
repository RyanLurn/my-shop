import type { Dictionary } from "@/features/i18n/types";

const enDictionary: Dictionary = {
  errors: {
    unexpected: {
      default: "Something went wrong",
      continueWithGithub: "Something went wrong while signing in with GitHub",
    },
    auth: "Something went wrong while authenticating",
  },
  loading: {
    default: "Loading...",
  },
  continueWithGithub: "Continue with GitHub",
};

export { enDictionary };
