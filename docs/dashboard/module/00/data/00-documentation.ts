import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage00Documentation: StageDocumentation = {
  stage: '00',
  title: 'Bootstrap e identidade',
  objective: 'Consolidar base visual, tokens, identidade e assets.',
  input: ['docs/theme/tokens.angular.json', 'docs/theme/web.css', 'docs/design.md', 'docs/00.md', 'docs/visual-identity/**'],
  output: ['Tema, marca e assets prontos para continuação'],
  status: 'passed',
  sections: [],
  decisions: ['Adotar Editorial Control Plane', 'Usar Layered Node Frame'],
  risks: ['Excesso de densidade visual', 'Contraste insuficiente'],
  hypotheses: ['A direção editorial reforça confiança'],
  criteria: ['WCAG 2.2 AA', 'foco visível', 'prefers-reduced-motion'],
  sources: [{ label: '00.md', path: 'docs/00.md' }],
  files: ['docs/00.json', 'docs/00.md'],
  actions: ['Revisar tokens', 'Validar contraste'],
  states: ['ready', 'loading', 'error'],
  auditEvents: ['bootstrap.completed', 'identity.validated'],
  diagrams: ['Layered Node Frame'],
  dataBlocks: [],
};
