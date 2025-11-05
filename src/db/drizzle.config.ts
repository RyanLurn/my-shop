import { defineConfig } from "drizzle-kit";
import { serverEnv } from "@/lib/env/server";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: serverEnv.DB_FILE_NAME,
  },
});
