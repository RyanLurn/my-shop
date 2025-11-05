import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { primaryKey } from "@/db/helpers/primary-key";
import { timestamps } from "@/db/helpers/timestamps";
import { SUPPORTED_LANGUAGES } from "@/features/i18n/consts";

const postsTable = sqliteTable("posts_table", {
  id: primaryKey,
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  language: text("language", { enum: SUPPORTED_LANGUAGES }).notNull(),
  status: text("status", {
    enum: ["draft", "published", "archived"],
  })
    .notNull()
    .default("draft"),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  editedAt: integer("edited_at", { mode: "timestamp" }),
  ...timestamps,
});

export { postsTable };
