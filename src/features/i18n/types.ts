import type * as z from "zod";
import type { supportedLanguageSchema } from "@/features/i18n/validators";

type SupportedLanguage = z.infer<typeof supportedLanguageSchema>;

type Dictionary = {
  errors: {
    unexpected: {
      default: string;
      continueWithGithub: string;
    };
    auth: string;
  };
  loadingPleaseWait: string;
  continueWithGithub: string;
  signUp: string;
  signIn: string;
  alreadyHaveAnAccount: string;
  dontHaveAnAccount: string;
  somethingWentWrong: string;
};

export type { SupportedLanguage, Dictionary };
