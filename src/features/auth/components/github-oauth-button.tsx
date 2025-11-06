"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { continueWithGithub } from "@/features/auth/actions/continue-with-github";
import { GitHubInvertocat } from "@/features/auth/components/github-invertocat";

function GitHubOAuthButton({
  className,
  loadingText,
  continueWithGithubText,
}: {
  className?: string;
  loadingText: string;
  continueWithGithubText: string;
}) {
  const [_errors, action, isPending] = useActionState(continueWithGithub, {
    errors: [],
  });

  return (
    <form className={className} action={action}>
      <Button type="submit" variant="outline" disabled={isPending}>
        <GitHubInvertocat />
        <span>{isPending ? loadingText : continueWithGithubText}</span>
      </Button>
    </form>
  );
}

export { GitHubOAuthButton };
