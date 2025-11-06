import type * as z from "zod";
import type { supportedLanguageSchema } from "@/features/i18n/validators";

type SupportedLanguage = z.infer<typeof supportedLanguageSchema>;

export type { SupportedLanguage };
