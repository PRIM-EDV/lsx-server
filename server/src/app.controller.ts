import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './api/auth/auth.service';

@Controller()
export class AppController {
  constructor() {}


}
