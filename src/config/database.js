import 'dotenv/config';

import { neon } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm-neon-http';

const sql = neon(processors.env.database_url);

const db = drizzle(sql);

export { db, sql };