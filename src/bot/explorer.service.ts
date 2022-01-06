import { Injectable, Logger } from '@nestjs/common';
import { resolve } from 'path';
import {
  ResourceExplorer,
  ComponentDeclarativeTypes,
} from 'botbuilder-dialogs-declarative';

import { ServiceCollectionService } from './collection.service';

@Injectable()
export class ResourceExplorerService extends ResourceExplorer {
  private logger = new Logger(ResourceExplorerService.name);

  constructor(services: ServiceCollectionService) {
    super({
      declarativeTypes:
        services.mustMakeInstance<ComponentDeclarativeTypes[]>(
          'declarativeTypes',
        ),
    });
    this.logger.debug('initializing resource explorer');
    // TODO: make this configurable
    this.addFolder(resolve(process.cwd(), 'resources'), true, false);
  }
}
