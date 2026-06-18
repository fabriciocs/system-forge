import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage02Documentation: StageDocumentation = {
  stage: '02',
  title: 'Pesquisa e benchmark',
  objective: 'Registrar concorrentes, lacunas, tendências e oportunidades.',
  input: ['docs/02.md'],
  output: ['Mapa competitivo e oportunidades'],
  status: 'passed',
  sections: [],
  decisions: ['Tratar incumbentes como benchmark e não cópia'],
  risks: ['Comoditização de IA', 'Posicionamento genérico'],
  hypotheses: ['A combinação integral ainda não é coberta pelo mercado'],
  criteria: ['Fonte oficial', 'Confiança alta'],
  sources: [{ label: '02.md', path: 'docs/02.md' }],
  files: ['docs/02.md'],
  actions: ['Comparar players', 'Mapear lacunas'],
  states: ['ready', 'loading', 'error'],
  auditEvents: ['benchmark.updated'],
  diagrams: ['Mapa de concorrentes'],
  dataBlocks: [],
};
