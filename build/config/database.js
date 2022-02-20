"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'jph',
    password: process.env.POSTGRES_PASSWORD || 'jph',
    database: process.env.POSTGRES_DB || "econfi-v1",
    entities: [],
    synchronize: true,
};
exports.default = config;
