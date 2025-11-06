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
};

export type { SupportedLanguage, Dictionary };
