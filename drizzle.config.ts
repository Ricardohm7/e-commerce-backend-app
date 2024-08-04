import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

if (process.env.NODE_ENV === 'production') {
  config({ path: ".prod.env" }); // or .env.local
} else {
  config({ path: ".dev.env" });
}

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});