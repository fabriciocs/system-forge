import type { ContentBlock, StageId, StageSection } from '@/core/types/documentation';

export interface StageDocumentation {
  stage: StageId;
  title: string;
  objective: string;
  input: string[];
  output: string[];
  status: string;
  sections: StageSection[];
  decisions: string[];
  risks: string[];
  hypotheses: string[];
  criteria: string[];
  sources: { label: string; path: string }[];
  files: string[];
  actions: string[];
  states: string[];
  auditEvents: string[];
  diagrams: string[];
  dataBlocks: ContentBlock[];
}
