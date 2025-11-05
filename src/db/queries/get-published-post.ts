import { and, eq } from "drizzle-orm";
import { err, ok, type Result } from "neverthrow";
import { db } from "@/db/connect";
import { postsTable } from "@/db/schema/content";
import type { NotFoundError, UnexpectedError } from "@/types/errors";

type SelectPost = typeof postsTable.$inferSelect;

async function getPublishedPost({
  slug,
  language,
}: Pick<SelectPost, "slug" | "language">): Promise<
  Result<SelectPost, NotFoundError | UnexpectedError>
> {
  try {
    const post = await db
      .select()
      .from(postsTable)
      .where(
        and(
          eq(postsTable.slug, slug),
          eq(postsTable.language, language),
          eq(postsTable.status, "published")
        )
      )
      .get();

    if (post) return ok(post);

    const notFoundError: NotFoundError = {
      kind: "not-found",
      message: "Post not found",
      context: { slug, language },
    };
    console.warn(notFoundError);
    return err(notFoundError);
  } catch (error) {
    const unexpectedError: UnexpectedError = {
      kind: "unexpected",
      message: "Unexpected error",
      error,
      context: { slug, language },
    };
    console.error(unexpectedError);
    return err(unexpectedError);
  }
}

export { getPublishedPost };
