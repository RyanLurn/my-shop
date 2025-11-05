import { text } from "drizzle-orm/sqlite-core";
import { generateUuid } from "@/lib/utils";

const primaryKey = text("id")
  .primaryKey()
  .$default(() => generateUuid());

export { primaryKey };
