import {ApiService} from './api-service/api.service';
import {SharedService} from './shared-service/shared.service';

export const services: any [] = [ApiService, SharedService];

export * from './api-service/api.service';
export * from './shared-service/shared.service';
