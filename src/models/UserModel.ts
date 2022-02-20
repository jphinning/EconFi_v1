import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { CommentModel } from './CommentModel';
import { PostModel } from './PostModel';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
  
  @Column()
  email!: string;

  @OneToMany(_type => PostModel, (post: PostModel) => post.user)
  posts!: Array<PostModel>;

  @OneToMany(_type => CommentModel, (comment: CommentModel) => comment.user)
  comments!: Array<CommentModel>;

  @CreateDateColumn()
  createDateColumn!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}