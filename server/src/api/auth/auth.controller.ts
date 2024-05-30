import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard as PassportGuard} from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(PassportGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthGuard)
  @Post('refresh')
  async refresh(@Request() req) {
    return this.authService.refresh(req.body.access_token);
  }
}



