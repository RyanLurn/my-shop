import "server-only";

const dictionaries = {
  en: () =>
    import("@/features/i18n/dictionaries/en.json").then(
      (module) => module.default
    ),
  vi: () =>
    import("@/features/i18n/dictionaries/vi.json").then(
      (module) => module.default
    ),
};

function getDictionary(lang: "en" | "vi") {
  return dictionaries[lang]();
}

export { getDictionary };
