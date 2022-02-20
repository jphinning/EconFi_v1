import { text } from 'stream/consumers';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm'
import { CommentModel } from './CommentModel';
import { UserModel } from './UserModel';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({
    type: "text"
  })
  content!: string;

  @Column({nullable: true})
  userID!: number;
  @ManyToOne( _type => UserModel, (user: UserModel) => user.posts)
  @JoinColumn()
  user!: UserModel;

  @OneToMany(_type => CommentModel, (comment: CommentModel) => comment.post)
  comments!: Array<CommentModel>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}