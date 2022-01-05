import { Injectable } from '@nestjs/common';
import { MemoryStorage } from 'botbuilder';

@Injectable()
export class StorageService extends MemoryStorage {}
