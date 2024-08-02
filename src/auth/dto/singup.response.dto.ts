import { ApiProperty } from "@nestjs/swagger";

export class SignupResponseDto {
  @ApiProperty({
    example: 'string',
    description: 'Access token for authentication',
  })
  accessToken: string;

  @ApiProperty({
    example: 'string',
    description: 'Refresh token for generating new access token',
  })
  refreshToken: string;
}