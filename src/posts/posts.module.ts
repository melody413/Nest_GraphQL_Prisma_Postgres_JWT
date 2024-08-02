import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostService } from './posts.service';

@Module({
  imports: [],
  providers: [PostsResolver, PostService],
  controllers: []
})
export class PostsModule {}
