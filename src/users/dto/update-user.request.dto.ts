import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserRequestDto {
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;
}
