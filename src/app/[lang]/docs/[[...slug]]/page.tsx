import { notFound } from "next/navigation";
import { getPublishedPost } from "@/db/queries/get-published-post";
import { EN_DOCS_INDEX_SLUG, VI_DOCS_INDEX_SLUG } from "@/features/i18n/consts";

type DocPageProp = {
  params: Promise<{ lang: "en" | "vi"; slug?: string[] }>;
};

export default async function DocPage({ params }: DocPageProp) {
  const { lang, slug } = await params;
  const indexSlug = lang === "en" ? EN_DOCS_INDEX_SLUG : VI_DOCS_INDEX_SLUG;
  const docSlug = slug?.join("/") || indexSlug;

  const getPublishedPostResult = await getPublishedPost({
    slug: docSlug,
    language: lang,
  });

  if (getPublishedPostResult.isErr()) {
    if (getPublishedPostResult.error.kind === "not-found") {
      notFound();
    }

    throw new Error("Something went wrong");
  }

  const post = getPublishedPostResult.value;

  return (
    <div className="h-full flex flex-col gap-y-2 items-center">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}
