import { Module } from '@nestjs/common';

import { ServiceCollectionService } from './collection.service';
import { ConversationStateService } from './convo-state.service';
import { ResourceExplorerService } from './explorer.service';
import { DialogManagerService } from './manager.service';
import { StorageService } from './storage.service';
import { UserStateService } from './user-state.service';

@Module({
  providers: [
    ServiceCollectionService,
    ResourceExplorerService,
    DialogManagerService,
    StorageService,
    ConversationStateService,
    UserStateService,
  ],
  exports: [ResourceExplorerService, DialogManagerService],
})
export class BotModule {}
