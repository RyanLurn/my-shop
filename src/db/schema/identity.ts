import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {
  ACCOUNTS_TABLE_NAME,
  SESSIONS_TABLE_NAME,
  USERS_TABLE_NAME,
  VERIFICATIONS_TABLE_NAME,
} from "@/db/consts";
import { primaryKey } from "@/db/helpers/primary-key";
import { timestamps } from "@/db/helpers/timestamps";
import { userIdForeignKey } from "@/db/helpers/user-id-foreign-key";

const usersTable = sqliteTable(USERS_TABLE_NAME, {
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

const sessionsTable = sqliteTable(SESSIONS_TABLE_NAME, {
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

const accountsTable = sqliteTable(ACCOUNTS_TABLE_NAME, {
  // Better Auth schema
  id: primaryKey,
  userId: userIdForeignKey,
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  ...timestamps,
});

const verificationsTable = sqliteTable(VERIFICATIONS_TABLE_NAME, {
  // Better Auth schema
  id: primaryKey,
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  ...timestamps,
});

export { usersTable, sessionsTable, accountsTable, verificationsTable };
