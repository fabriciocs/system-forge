import type { DocumentViewMode, StageId } from '@/core/types/documentation';

export type RouteKind = 'public' | 'authenticated' | 'stage' | 'documentation';

export type RouteStatus = 'ready' | 'blocked' | 'draft';

export interface NavigationRoute {
  path: string;
  label: string;
  stage: StageId;
  kind: RouteKind;
  sectionId: string;
  contentType: DocumentViewMode;
  status: RouteStatus;
}

export interface NavigationCrumb {
  label: string;
  path: string;
}
