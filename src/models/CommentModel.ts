import { 
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { UserModel } from '.';
import { PostModel } from './PostModel';

@Entity()
export class CommentModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'text'
  })
  content!: string;

  @Column({ nullable: true })
  userId!: number;
  @ManyToOne(_type => UserModel, (user: UserModel) => user.comments)
  @JoinColumn()
  user!: UserModel;

  @Column({ nullable: true})
  postId!: number;
  @ManyToOne(_type => PostModel, (post: PostModel) => post.comments)
  @JoinColumn()
  post!: PostModel;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}