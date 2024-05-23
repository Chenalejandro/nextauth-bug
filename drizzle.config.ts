import { type Config } from "drizzle-kit";

export default {
    schema: "./src/schema.ts",
    dbCredentials: {
        url: process.env.POSTGRES_URL!,
    },
    dialect: "postgresql",
} satisfies Config;
