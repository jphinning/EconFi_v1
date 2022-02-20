import { ConnectionOptions } from "typeorm";
import { UserModel, PostModel, CommentModel } from "../models";

const config: ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'econfi-v1',
  password: process.env.POSTGRES_PASSWORD || 'econfi-v1',
  database: process.env.POSTGRES_DB || "econfi-v1",
  entities: [UserModel, PostModel, CommentModel],
  synchronize: true,
};

export default config;