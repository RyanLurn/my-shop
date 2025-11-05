import { serverEnv } from "@/lib/env/server";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const db = drizzle({ connection: { url: serverEnv.DB_FILE_NAME } });

export { db };
