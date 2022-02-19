import express from "express";
import PingController from "../controllers/PingController";

const router = express.Router();

router.get('/ping', async (_req, res) => {
  const pingController = new PingController();

  return res.send(await pingController.getMessage());
})

export default router;