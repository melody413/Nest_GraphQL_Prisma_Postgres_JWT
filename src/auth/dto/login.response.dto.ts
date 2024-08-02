import { ApiProperty } from "@nestjs/swagger";

export class LoginResponseDto {
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