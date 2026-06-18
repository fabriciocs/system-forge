import type { ContentBlock, StageDocument, StageSection } from '@/core/types/documentation';
import { filterRoutes } from './document-search';
import type { NavigationRoute } from '@/core/navigation';

export interface DocumentationSearchResult {
  documents: StageDocument[];
  sections: StageSection[];
  blocks: ContentBlock[];
  routes: NavigationRoute[];
}

export function searchDocumentation(
  query: string,
  inputs: {
    documents: StageDocument[];
    sections: StageSection[];
    blocks: ContentBlock[];
    routes: NavigationRoute[];
  },
): DocumentationSearchResult {
  const normalized = query.trim().toLowerCase();

  if (normalized.length === 0) {
    return inputs;
  }

  return {
    documents: inputs.documents.filter((item) =>
      [item.title, item.source, item.stage, item.view].some((value) => value.toLowerCase().includes(normalized)),
    ),
    sections: inputs.sections.filter((item) => [item.id, item.title].some((value) => value.toLowerCase().includes(normalized))),
    blocks: inputs.blocks.filter((item) =>
      [item.id, item.title, item.kind, item.source, item.summary].some((value) => value.toLowerCase().includes(normalized)),
    ),
    routes: filterRoutes(inputs.routes, { query: normalized }),
  };
}
