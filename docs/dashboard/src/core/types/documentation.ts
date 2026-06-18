export type StageId = '00' | '01' | '02' | '03' | '04' | '05';

export type DocumentViewMode = 'summary' | 'structured' | 'full';

export interface StageDocument {
  stage: StageId;
  title: string;
  source: string;
  view: DocumentViewMode;
}

export interface DocumentationRoute {
  path: string;
  label: string;
  mode: DocumentViewMode;
}

export interface CoverageMap {
  stages: StageId[];
  mode: 'partial' | 'complete';
  status: 'draft' | 'ready' | 'blocked';
}

export type ContentWidget =
  | 'cards'
  | 'tables'
  | 'timelines'
  | 'matrices'
  | 'accordions'
  | 'tabs'
  | 'chips'
  | 'diagrams';

export interface ContentBlock {
  id: string;
  title: string;
  kind: ContentWidget;
  source: string;
  summary: string;
}

export interface StageSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}
