"use client";

import { AlertCircle } from "lucide-react";
import { useActionState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { continueWithGithub } from "@/features/auth/actions/continue-with-github";
import { GitHubInvertocat } from "@/features/auth/components/github-invertocat";

function GitHubOAuthButton({
  className,
  loadingText,
  continueWithGithubText,
  somethingWentWrongText,
}: {
  className?: string;
  loadingText: string;
  continueWithGithubText: string;
  somethingWentWrongText: string;
}) {
  const [state, action, isPending] = useActionState(continueWithGithub, {
    errors: [],
  });

  return (
    <>
      <form className={className} action={action}>
        <Button type="submit" variant="outline" disabled={isPending}>
          <GitHubInvertocat />
          <span>{isPending ? loadingText : continueWithGithubText}</span>
        </Button>
      </form>
      {state.errors.length > 0 && (
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>{somethingWentWrongText}</AlertTitle>
          <AlertDescription>
            <ul className="list-inside list-disc text-sm">
              {state.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}

export { GitHubOAuthButton };
