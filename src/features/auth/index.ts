import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { db } from "@/db/connect";
import {
  ACCOUNTS_TABLE_NAME,
  SESSIONS_TABLE_NAME,
  USERS_TABLE_NAME,
  VERIFICATIONS_TABLE_NAME,
} from "@/db/consts";

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  user: {
    modelName: USERS_TABLE_NAME,
  },
  session: {
    modelName: SESSIONS_TABLE_NAME,
  },
  account: {
    modelName: ACCOUNTS_TABLE_NAME,
  },
  verification: {
    modelName: VERIFICATIONS_TABLE_NAME,
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  plugins: [admin(), nextCookies()], // Make sure that nextCookies is the last plugin
});

export { auth };
