import { Body, Controller, Logger, Post, Req, Res } from '@nestjs/common';
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
  // public botFrameworkMessages(@Req() req, @Res() res, @Body() body) {
  public async botFrameworkMessages(@Req() req, @Body() body) {
    let result = {};
    this.logger.debug(JSON.stringify(body));

    const res = {
      status: () => 0,
      end: () => 0,
      send: (data) => {
        this.logger.debug(JSON.stringify(data));
        result = data;
      },
    };

    await this.adapter.processActivity(
      req,
      res,
      async (turnContext: TurnContext) => {
        await this.manager.onTurn(turnContext);
      },
    );

    this.logger.debug(JSON.stringify(result));
    return {};
  }
}
