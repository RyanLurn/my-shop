import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitHubOAuthButton } from "@/features/auth/components/github-oauth-button";
import { getDictionary } from "@/features/i18n/helpers/get-dictionary";

export default async function SignInPage({
  params,
}: {
  params: Promise<{ lang: "en" | "vi" }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-5">
      <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {dictionary.signIn}
      </h1>
      <GitHubOAuthButton
        loadingText={dictionary.loadingPleaseWait}
        continueWithGithubText={dictionary.continueWithGithub}
        somethingWentWrongText={dictionary.somethingWentWrong}
      />
      <p className="text-center">
        {dictionary.dontHaveAnAccount}{" "}
        <Button variant="link" className="p-0 ml-1" asChild>
          <Link href="/sign-up">{dictionary.signUp}</Link>
        </Button>
      </p>
    </div>
  );
}
