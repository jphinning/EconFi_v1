import express from "express";
import CommentController from "../controllers/CommentController";

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new CommentController();
  const response = await controller.getComments();

  return res.send(response);
});

router.post('/', async (req, res) => {
  const controller = new CommentController();
  const response = await controller.createComment(req.body);

  return res.send(response);
});

router.get('/:id', async (req, res) => {

  try {
    const controller = new CommentController();
    const response = await controller.getComment(req.params.id);

    if (!response) return res.status(404).send({ message: 'No user found' });

    return res.send(response);

  } catch (error) {
    res.status(400).send({ message: 'error' });
  }
  
});

export default router;