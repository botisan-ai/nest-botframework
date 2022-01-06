import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { BotFrameworkAdapter } from 'botbuilder';

@Injectable()
export class BotFrameworkAdapterService
  extends BotFrameworkAdapter
  implements OnModuleInit
{
  private logger = new Logger(BotFrameworkAdapterService.name);

  onModuleInit() {
    this.onTurnError = async (context, error) => {
      this.logger.error(`[onTurnError] unhandled error: ${error}`);

      // Send a trace activity, which will be displayed in Bot Framework Emulator
      await context.sendTraceActivity(
        'OnTurnError Trace',
        `${error}`,
        'https://www.botframework.com/schemas/error',
        'TurnError',
      );

      // Send a message to the user
      await context.sendActivity('The bot encountered an error or bug.');
      await context.sendActivity(
        'To continue to run this bot, please fix the bot source code.',
      );
    };
  }
}
