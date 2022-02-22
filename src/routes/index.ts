import express from "express";
import UserRouter from "./UserRouter";
import PostRouter from "./PostRouter";
import CommentRouter from "./CommentRouter";

const router = express.Router();

router.use('/users', UserRouter);
router.use('/posts', PostRouter);
router.use('/comments', CommentRouter);

export default router;