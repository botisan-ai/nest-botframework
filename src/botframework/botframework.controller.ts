import { Controller, Logger, Post, Req, Res } from '@nestjs/common';
import { TurnContext } from 'botbuilder';

import { DialogManagerService } from 'src/bot';
import { BotFrameworkAdapterService } from './adapter.service';

@Controller('api')
export class BotFrameworkController {
  private logger = new Logger(BotFrameworkController.name);

  constructor(
    private readonly manager: DialogManagerService,
    private readonly adapter: BotFrameworkAdapterService,
  ) {}

  @Post('messages')
  public botFrameworkMessages(@Req() req, @Res() res) {
    return this.adapter.processActivity(
      req,
      res,
      async (turnContext: TurnContext) => {
        await this.manager.onTurn(turnContext);
      },
    );
  }
}
