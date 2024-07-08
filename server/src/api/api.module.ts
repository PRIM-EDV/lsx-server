import { Module } from '@nestjs/common';
import { LightApiModule } from './light/light.api.module';

@Module({
  imports: [
    LightApiModule
  ],
  controllers: [],
  providers: [],
})
export class ApiModule {}