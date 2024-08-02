import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class AdminLoginRequestDto {
  @Field()
  @IsEmail()
  @ApiProperty({
    example: 'string',
    description: 'The email of the admin',
    required: true,
  })
  email: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({
    example: 'string',
    description: 'The password of the admin',
    required: true,
  })
  password: string;
}
