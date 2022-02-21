import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { PostModel } from "../models";
import { IPostPayload, PostRepository } from "../repositories/postRepo";

@Route('posts')
@Tags('Posts')
export default class PostController {
  @Get('/')
  public async getPosts(): Promise<Array<PostModel>> {
    return new PostRepository().getPosts();
  }

  @Post('/')
  public async createPost(@Body() body: IPostPayload): Promise<PostModel> {
    return new PostRepository().createPost(body);
  }

  @Get('/:id')
  public async getPost(@Path() id: string): Promise<PostModel | null> {
    return new PostRepository().getPost(Number(id));
  }
}