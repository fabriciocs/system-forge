import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage05Documentation: StageDocumentation = {
  stage: '05',
  title: 'Rastreabilidade e navegação',
  objective: 'Mapear origem, artefatos, telas, rotas, i18n e wireframes.',
  input: ['docs/05.md', 'docs/dashboard/dashboard-map.json', 'docs/dashboard/documentation-coverage.json'],
  output: ['Mapa de rastreabilidade, inventário e navegação'],
  status: 'passed',
  sections: [],
  decisions: ['Hierarquia por etapa', 'Navegação por fonte, rota e status'],
  risks: ['Rotas órfãs', 'Sobreposição conceitual'],
  hypotheses: ['A navegação clara reduz esforço cognitivo'],
  criteria: ['Rastreabilidade completa', 'Todas as telas cobertas'],
  sources: [{ label: '05.md', path: 'docs/05.md' }],
  files: ['docs/05.md'],
  actions: ['Abrir etapa', 'Filtrar por fonte'],
  states: ['ready', 'empty', 'error', 'conflict'],
  auditEvents: ['traceability.covered'],
  diagrams: ['Navigation graph'],
  dataBlocks: [],
};
