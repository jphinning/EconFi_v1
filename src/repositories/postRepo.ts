import { getRepository } from "typeorm";
import { PostModel } from "../models";

export interface IPostPayload {
  title: string,
  content: string,
  userID: number,
}


export class PostRepository {
  
  public async getPosts(): Promise<Array<PostModel>> {
    const postRepo = getRepository(PostModel);

    return postRepo.find();
  }

  public async createPost(payload: IPostPayload): Promise<PostModel> {
    const postRepo = getRepository(PostModel);
    const post = new PostModel();

    return postRepo.save({
      ...post,
      ...payload,
    });
  }

  public async getPost(id: number): Promise<PostModel | null> {
    const postRepo = getRepository(PostModel)
    const post = await postRepo.findOne({id: id})
    
    if(!post) return null;

    return post
  }
}