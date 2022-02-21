"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'econfi-v1',
    password: process.env.POSTGRES_PASSWORD || 'econfi-v1',
    database: process.env.POSTGRES_DB || "econfi-v1",
    entities: [models_1.UserModel, models_1.PostModel, models_1.CommentModel],
    synchronize: true,
};
exports.default = config;
