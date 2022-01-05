import { Injectable } from '@nestjs/common';
import { ConversationState } from 'botbuilder';

import { StorageService } from './storage.service';

@Injectable()
export class ConversationStateService extends ConversationState {
  constructor(storageService: StorageService) {
    super(storageService);
  }
}
