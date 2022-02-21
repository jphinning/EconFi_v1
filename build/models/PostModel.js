"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const typeorm_1 = require("typeorm");
const CommentModel_1 = require("./CommentModel");
const UserModel_1 = require("./UserModel");
let PostModel = class PostModel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostModel.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text"
    }),
    __metadata("design:type", String)
], PostModel.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PostModel.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(_type => UserModel_1.UserModel, (user) => user.posts),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", UserModel_1.UserModel)
], PostModel.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(_type => CommentModel_1.CommentModel, (comment) => comment.post),
    __metadata("design:type", Array)
], PostModel.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PostModel.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], PostModel.prototype, "updatedAt", void 0);
PostModel = __decorate([
    (0, typeorm_1.Entity)()
], PostModel);
exports.PostModel = PostModel;
