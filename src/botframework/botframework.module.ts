import { Module } from '@nestjs/common';

import { BotModule } from 'src/bot';

import { BotFrameworkAdapterService } from './adapter.service';
import { BotFrameworkController } from './botframework.controller';

@Module({
  imports: [BotModule],
  providers: [BotFrameworkAdapterService],
  controllers: [BotFrameworkController],
})
export class BotFrameworkModule {}
