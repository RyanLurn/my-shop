import { sql } from "drizzle-orm";
import { integer } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch('now', 'subsec') * 1000)`),

  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch('now', 'subsec') * 1000)`)
    .$onUpdate(() => new Date()),
};

export { timestamps };
