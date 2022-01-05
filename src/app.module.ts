import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/modules';
import { BotFrameworkModule } from 'src/botframework';

@Module({
  imports: [ConfigModule, BotFrameworkModule],
})
export class AppModule {}
