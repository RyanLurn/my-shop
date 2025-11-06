import type { Dictionary } from "@/features/i18n/types";

const enDictionary: Dictionary = {
  errors: {
    unexpected: {
      default: "Something went wrong",
      continueWithGithub: "Something went wrong while signing in with GitHub",
    },
    auth: "Something went wrong while authenticating",
  },
  loadingPleaseWait: "Loading, please wait...",
  continueWithGithub: "Continue with GitHub",
  signUp: "Sign up",
  signIn: "Sign in",
  alreadyHaveAnAccount: "Already have an account?",
  dontHaveAnAccount: "Don't have an account?",
  somethingWentWrong: "Something went wrong",
};

export { enDictionary };
