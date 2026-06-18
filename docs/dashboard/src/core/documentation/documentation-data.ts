import type { ContentBlock, StageSection } from '@/core/types/documentation';

export const documentationSections: StageSection[] = [
  {
    id: 'overview',
    title: 'Visão geral',
    blocks: [
      {
        id: 'b01',
        title: 'Direção estética',
        kind: 'cards',
        source: 'docs/design.md',
        summary: 'Editorial Control Plane, Layered Node Frame e princípios visuais.',
      },
      {
        id: 'b02',
        title: 'Identidade e tokens',
        kind: 'tables',
        source: 'docs/theme/tokens.angular.json',
        summary: 'Cores, tipografia, espaçamento, motion, elevação e foco.',
      },
    ],
  },
  {
    id: 'navigation',
    title: 'Navegação',
    blocks: [
      {
        id: 'b03',
        title: 'Inventário de rotas',
        kind: 'tables',
        source: 'docs/dashboard/dashboard-map.json',
        summary: 'Mapa de rotas, etapas, rotas órfãs e destinos visuais.',
      },
      {
        id: 'b04',
        title: 'Breadcrumbs',
        kind: 'chips',
        source: 'docs/05.md',
        summary: 'Contexto de etapa, documento e seção.',
      },
    ],
  },
  {
    id: 'analysis',
    title: 'Análise',
    blocks: [
      {
        id: 'b05',
        title: 'Lacunas e riscos',
        kind: 'accordions',
        source: 'docs/01.md',
        summary: 'Hipóteses, riscos, lacunas e oportunidades.',
      },
      {
        id: 'b06',
        title: 'DER e relações',
        kind: 'diagrams',
        source: 'docs/04.md',
        summary: 'Entidades, relacionamentos e ciclo de vida.',
      },
    ],
  },
];

export const documentationBlocks: ContentBlock[] = documentationSections.flatMap((section) => section.blocks);
