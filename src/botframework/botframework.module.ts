import { Module } from '@nestjs/common';

import { BotFrameworkController } from './botframework.controller';

@Module({
  controllers: [BotFrameworkController],
})
export class BotFrameworkModule {}
