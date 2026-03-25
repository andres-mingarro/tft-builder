import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './database/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: 'file:./database/tft.db',
  },
} satisfies Config;
