import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { primaryKey } from "@/db/helpers/primary-key";
import { timestamps } from "@/db/helpers/timestamps";
import { userIdForeignKey } from "@/db/helpers/user-id-foreign-key";

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

const sessionsTable = sqliteTable("sessions_table", {
  // Better Auth schema
  id: primaryKey,
  userId: userIdForeignKey,
  token: text("token").notNull().unique(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  ...timestamps,
  // Admin plugin -> all fields optional
  impersonatedBy: text("impersonated_by").references(() => usersTable.id),
});

export { usersTable, sessionsTable };
