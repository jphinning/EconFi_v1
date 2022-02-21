import express from "express";
import UserRouter from "./UserRouter"
import PostRouter from "./PostRouter"

const router = express.Router();

router.use('/users', UserRouter);
router.use('/posts', PostRouter);

export default router;