"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = __importDefault(require("./UserRouter"));
const PostRouter_1 = __importDefault(require("./PostRouter"));
const CommentRouter_1 = __importDefault(require("./CommentRouter"));
const router = express_1.default.Router();
router.use('/users', UserRouter_1.default);
router.use('/posts', PostRouter_1.default);
router.use('/comments', CommentRouter_1.default);
exports.default = router;
