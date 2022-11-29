import { json, error } from "@sveltejs/kit";

import Database from "better-sqlite3";
import fs from "node:fs";

let db = new Database(fs.readFileSync("superheroes.db"));

export function GET({ url }) {
  const query = url.searchParams.get("q");
  if (!query) {
    throw error(401, "Query (`?q=`) is required");
  }
  const stmt = db.prepare("select * from superheroes where name like ?");
  return json(stmt.all(`%${query}%`));
}
