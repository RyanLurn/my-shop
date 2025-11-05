import { drizzle } from "drizzle-orm/libsql";
import * as contentSchema from "@/db/schema/content";
import { serverEnv } from "@/lib/env/server";

const db = drizzle({
  connection: { url: serverEnv.DB_FILE_NAME },
  schema: { ...contentSchema },
});

export { db };
