import { documentationBlocks, documentationSections } from '@/core/documentation';
import { navigationRoutes } from '../../../routes';

export const documentationMock = {
  sections: documentationSections,
  blocks: documentationBlocks,
  routes: navigationRoutes,
  states: ['ready', 'loading', 'empty', 'error', 'success', 'blocked', 'no-permission', 'read-only', 'processing-ai'],
} as const;
