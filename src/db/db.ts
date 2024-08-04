import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
const pool = new Pool({ connectionString: `${process.env.DATABASE_URL}`, ssl: { rejectUnauthorized: false } });
export const db = drizzle(pool);