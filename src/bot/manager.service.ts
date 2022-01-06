import { Injectable, Logger } from '@nestjs/common';
import { DialogManager } from 'botbuilder-dialogs';

import { ResourceExplorerService } from './explorer.service';
import { ConversationStateService } from './convo-state.service';
import { UserStateService } from './user-state.service';

@Injectable()
export class DialogManagerService extends DialogManager {
  private logger = new Logger(DialogManagerService.name);

  constructor(
    private readonly explorerService: ResourceExplorerService,
    private readonly conversationStateService: ConversationStateService,
    private readonly userStateService: UserStateService,
  ) {
    super();
    this.logger.debug('initializing dialog manager');
    const rootDialogResource = this.explorerService.getResource('echo.dialog');
    this.rootDialog = this.explorerService.loadType(rootDialogResource);
    this.conversationState = this.conversationStateService;
    this.userState = this.userStateService;
  }
}
