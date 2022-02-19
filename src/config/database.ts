import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'jph',
  password: process.env.POSTGRES_PASSWORD || 'jph',
  database: process.env.POSTGRES_DB || "econfi-v1",
  entities: [],
  synchronize: true,
};

export default config;