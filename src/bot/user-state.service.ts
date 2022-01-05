import { Injectable } from '@nestjs/common';
import { UserState } from 'botbuilder';

import { StorageService } from './storage.service';

@Injectable()
export class UserStateService extends UserState {
  constructor(storageService: StorageService) {
    super(storageService);
  }
}
