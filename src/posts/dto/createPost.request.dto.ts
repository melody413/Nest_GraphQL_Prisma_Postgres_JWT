import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostDto {
  @Field()
  @IsNotEmpty()
  content: string;

  @Field()
  @IsNotEmpty()
  title: string;
}
