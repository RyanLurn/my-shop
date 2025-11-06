import * as z from "zod";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/features/i18n/consts";

const supportedLanguageSchema = z
  .enum(SUPPORTED_LANGUAGES)
  .catch(DEFAULT_LANGUAGE);

export { supportedLanguageSchema };
