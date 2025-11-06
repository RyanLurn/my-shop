import { getDictionary } from "@/features/i18n/helpers/get-dictionary";
import type { SupportedLanguage } from "@/features/i18n/types";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: SupportedLanguage }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return <div>Dashboard</div>;
}
