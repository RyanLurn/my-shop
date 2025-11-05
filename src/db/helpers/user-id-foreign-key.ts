import { text } from "drizzle-orm/sqlite-core";
import { usersTable } from "@/db/schema/identity";

const userIdForeignKey = text("user_id")
  .notNull()
  .references(() => usersTable.id);

export { userIdForeignKey };
