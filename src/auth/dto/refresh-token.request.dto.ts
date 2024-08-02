import { ArgsType, Field } from '@nestjs/graphql';
import { IsJWT, IsNotEmpty } from 'class-validator';
import { GraphQLJWT } from 'graphql-scalars';

@ArgsType()
export class RefreshTokenRequestDto {
  @IsNotEmpty()
  @IsJWT()
  @Field(() => GraphQLJWT)
  token: string;
}
