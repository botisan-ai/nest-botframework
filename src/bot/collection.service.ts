import { Injectable, Logger } from '@nestjs/common';
import {
  AdaptiveBotComponent,
  LanguageGenerationBotComponent,
} from 'botbuilder-dialogs-adaptive';
import {
  ServiceCollection,
  noOpConfiguration,
} from 'botbuilder-dialogs-adaptive-runtime-core';

@Injectable()
export class ServiceCollectionService extends ServiceCollection {
  private logger = new Logger(ServiceCollectionService.name);

  constructor() {
    super({
      declarativeTypes: [],
    });
    this.logger.debug('initializing service collection');
    new AdaptiveBotComponent().configureServices(this, noOpConfiguration);
    new LanguageGenerationBotComponent().configureServices(
      this,
      noOpConfiguration,
    );
  }
}
