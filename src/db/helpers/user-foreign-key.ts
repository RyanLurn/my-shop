import { text } from "drizzle-orm/sqlite-core";
import { usersTable } from "@/db/schema/identity";

const userForeignKey = text("user_id").references(() => usersTable.id);

export { userForeignKey };
