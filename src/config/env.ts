import dotenv from "dotenv";
dotenv.config();

function requireEnv(key: string): string {
  const value = process.env[key];
//   console.log(process.env,"varun")
  if (!value) {
    throw new Error(`❌ Missing env variable: ${key}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: requireEnv("TABLAS_ACCESS_DB_PATH"),
};
