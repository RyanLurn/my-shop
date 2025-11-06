import { redirect } from "next/navigation";
import { getUser } from "@/features/auth/helpers/get-user";
import { getDictionary } from "@/features/i18n/helpers/get-dictionary";
import type { SupportedLanguage } from "@/features/i18n/types";

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ lang: SupportedLanguage }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  const getUserResult = await getUser({
    requestIsNotAuthenticatedText: dictionary.requestIsNotAuthenticated,
  });

  if (getUserResult.isErr()) {
    if (getUserResult.error.kind === "not-authenticated") {
      redirect(`/${lang}/sign-in`);
    }

    throw new Error(getUserResult.error.message);
  }

  const user = getUserResult.value;

  return (
    <div className="size-full flex flex-col items-center justify-center">
      Welcome, user {user.name}.
    </div>
  );
}
