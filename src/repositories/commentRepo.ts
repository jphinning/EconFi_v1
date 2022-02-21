import { getRepository } from "typeorm";
import { CommentModel } from "../models";

export interface ICommentPayload {
  content: string,
  userId: number,
  postId: number,
}


export class CommentRepository {

  public async getComments(): Promise<Array<CommentModel>> {
    const commentRepo = getRepository(CommentModel);

    return commentRepo.find();
  }

  public async createComment(payload: ICommentPayload): Promise<CommentModel> {
    const commentRepo = getRepository(CommentModel);
    const comment = new CommentModel();

    return commentRepo.save({
      ...comment,
      ...payload,
    });
  }

  public async getComment(id: number): Promise<CommentModel | null> {
    const commentRepo = getRepository(CommentModel)
    const comment = await commentRepo.findOne({ id: id })

    if (!comment) return null;

    return comment
  }
}