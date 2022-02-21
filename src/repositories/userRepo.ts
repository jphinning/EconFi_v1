import { getRepository } from 'typeorm';
import { UserModel } from '../models';

export interface IUserPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export const getUsers = async (): Promise<Array<UserModel>> => {
  const userRepo = getRepository(UserModel);

  return userRepo.find();
}

export const createUser = async (payload: IUserPayload): Promise<UserModel> => {
  const userRepo = getRepository(UserModel);
  const user = new UserModel();

  return userRepo.save({
    ...user,
    ...payload
  });
}

export const getUser = async (id: number): Promise<UserModel | null> => {
  const userRepo = getRepository(UserModel);
  const user = await userRepo.findOne({ id: id });

  if (!user) return null;

  return user;
}