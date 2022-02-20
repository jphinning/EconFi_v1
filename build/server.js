"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//TypeORM
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database_1 = __importDefault(require("./config/database"));
//Express
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}));
app.use(index_1.default);
(0, typeorm_1.createConnection)(database_1.default)
    .then((_connection) => {
    app.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
})
    .catch((err) => {
    console.log(err);
});
