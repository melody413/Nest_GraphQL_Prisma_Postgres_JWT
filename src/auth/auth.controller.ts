import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupRequestDto } from './dto/signup.request.dto';
import { SignupResponseDto } from './dto/singup.response.dto';
import { LoginRequestDto } from './dto/login.request.dto';
import { LoginResponseDto } from './dto/login.response.dto';
import { AdminLoginRequestDto } from './dto/admin.login.request.dto';
import { AdminLoginResponseDto } from './dto/admin.login.response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 200, description: 'Sign up Successfully.', type: SignupResponseDto})
  @ApiResponse({ status: 201, description: 'The user has been successfully created.'})
  @ApiResponse({ status: 409, description: 'Email already used.'})
  async signup(@Body() signupRequest: SignupRequestDto) {
    return this.authService.createUser(signupRequest);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in' })
  @ApiResponse({ status: 200, description: 'User Logged in.', type: LoginResponseDto})
  @ApiResponse({ status: 404, description: 'No user found for email'})
  @ApiResponse({ status: 400, description: 'Invalid password'})
  async login(@Body() loginRequest: LoginRequestDto) {
    return this.authService.login(loginRequest);
  }

  @Post('adminLogin')
  @ApiOperation({ summary: 'Admin Login' })
  @ApiResponse({ status: 200, description: 'Admin Logged in.', type: AdminLoginResponseDto})
  @ApiResponse({ status: 404, description: 'No admin found for email'})
  @ApiResponse({ status: 400, description: 'Invalid password'})
  async adminLogin(@Body() adminLoginRequest: AdminLoginRequestDto) {
    return this.authService.login(adminLoginRequest);
  }
}