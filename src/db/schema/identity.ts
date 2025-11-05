import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { primaryKey } from "@/db/helpers/primary-key";
import { timestamps } from "@/db/helpers/timestamps";

const usersTable = sqliteTable("users_table", {
  // Better Auth schema
  id: primaryKey,
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .notNull()
    .default(false),
  image: text("image"),
  ...timestamps,
  // Admin plugin -> all fields optional
  role: text("role", { enum: ["user", "admin"] }).default("user"),
  banned: integer("banned", { mode: "boolean" }).default(false),
  banReason: text("ban_reason"),
  banExpires: integer("ban_expires", { mode: "timestamp" }),
});

export { usersTable };
