"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
class CommentRepository {
    getComments() {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepo = (0, typeorm_1.getRepository)(models_1.CommentModel);
            return commentRepo.find();
        });
    }
    createComment(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepo = (0, typeorm_1.getRepository)(models_1.CommentModel);
            const comment = new models_1.CommentModel();
            return commentRepo.save(Object.assign(Object.assign({}, comment), payload));
        });
    }
    getComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepo = (0, typeorm_1.getRepository)(models_1.CommentModel);
            const comment = yield commentRepo.findOne({ id: id });
            if (!comment)
                return null;
            return comment;
        });
    }
}
exports.CommentRepository = CommentRepository;
