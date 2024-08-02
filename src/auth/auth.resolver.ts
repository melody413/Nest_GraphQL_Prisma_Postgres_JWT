import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { Token } from './models/token.model';
import { LoginRequestDto } from './dto/login.request.dto';
import { AdminLoginRequestDto } from './dto/admin.login.request.dto';
import { SignupRequestDto } from './dto/signup.request.dto';
import { RefreshTokenRequestDto } from './dto/refresh-token.request.dto';
import { User } from '../users/models/user.model';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupRequestDto) {
    data.email = data.email.toLowerCase();
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async login(@Args('data') { email, password }: LoginRequestDto) {
    const { accessToken, refreshToken } = await this.auth.login(
      {email: email.toLowerCase(),
        password,}
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Auth)
  async adminLogin(@Args('data') { email, password }: AdminLoginRequestDto) {
    const { accessToken, refreshToken } = await this.auth.adminLogin(
      {email: email.toLowerCase(),
        password,}
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  @Mutation(() => Token)
  async refreshToken(@Args() { token }: RefreshTokenRequestDto) {
    return this.auth.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
