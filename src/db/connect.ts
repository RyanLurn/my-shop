import { drizzle } from "drizzle-orm/libsql";
import * as contentSchema from "@/db/schema/content";
import * as identitySchema from "@/db/schema/identity";
import { serverEnv } from "@/lib/env/server";

const db = drizzle({
  connection: { url: serverEnv.DB_FILE_NAME },
  schema: { ...contentSchema, ...identitySchema },
});

export { db };
