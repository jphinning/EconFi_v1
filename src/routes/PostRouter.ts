import express from "express";
import PostController from "../controllers/PostController";

const router = express.Router();

router.get('/', async (_req, res) => {
  const controller = new PostController();
  const response = await controller.getPosts();

  return res.send(response);
});

router.post('/', async (req, res) => {
  const controller = new PostController();
  const response = await controller.createPost(req.body);

  return res.send(response);
});

router.get('/:id', async (req, res) => {

  try {
    const controller = new PostController();
    const response = await controller.getPost(req.params.id);

    if (!response) return res.status(404).send({ message: 'No user found' });

    return res.send(response);
    
  } catch (error) {
    res.status(400).send({ message: 'error' });
  }

});

export default router;