import { Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { ActivityHandler, BotFrameworkAdapter, TurnContext } from 'botbuilder';

import { MAIN_ACTIVITY_HANDLER } from '.';

@Controller('api')
export class BotFrameworkController {
  private readonly botFrameworkAdapter: BotFrameworkAdapter;
  constructor(
    @Inject(MAIN_ACTIVITY_HANDLER)
    private readonly activityHandler: ActivityHandler,
  ) {
    this.botFrameworkAdapter = new BotFrameworkAdapter();
  }

  @Post('messages')
  public botFrameworkMessages(@Req() req, @Res() res) {
    return this.botFrameworkAdapter.processActivity(
      req,
      res,
      (turnContext: TurnContext) => this.activityHandler.run(turnContext),
    );
  }
}
