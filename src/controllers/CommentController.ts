import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { CommentModel } from "../models";
import { ICommentPayload, CommentRepository } from "../repositories/commentRepo";

@Route('comments')
@Tags('Comments')
export default class CommentController {
  @Get('/')
  public async getComments(): Promise<Array<CommentModel>> {
    return new CommentRepository().getComments();
  }

  @Post('/')
  public async createComment(@Body() body: ICommentPayload): Promise<CommentModel> {
    return new CommentRepository().createComment(body);
  }

  @Get('/:id')
  public async getComment(@Path() id: string): Promise<CommentModel | null> {
    return new CommentRepository().getComment(Number(id));
  }
}