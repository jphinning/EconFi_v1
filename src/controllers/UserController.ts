import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { UserModel } from "../models";
import {
  getUsers,
  getUser,
  IUserPayload,
  createUser
} from "../repositories/userRepo"

@Route('users')
@Tags('Users')
export default class UserController {
  @Get('/')
  public async getUsers(): Promise<Array<UserModel>> {
    return getUsers();
  }

  @Post('/')
  public async createUser(@Body() body: IUserPayload) : Promise<UserModel> {
    return createUser(body)
  }

  @Get('/:id')
  public async getUser(@Path() id: string) : Promise<UserModel | null> {
    return getUser(Number(id));
  }
}