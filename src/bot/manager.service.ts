import { Injectable } from '@nestjs/common';
import { ConversationState, UserState } from 'botbuilder';
import { Dialog, DialogManager } from 'botbuilder-dialogs';

@Injectable()
export class DialogManagerService extends DialogManager {
  constructor(
    rootDialog: Dialog,
    conversationState: ConversationState,
    userState: UserState,
  ) {
    super();
    this.rootDialog = rootDialog;
    this.conversationState = conversationState;
    this.userState = userState;
  }
}
