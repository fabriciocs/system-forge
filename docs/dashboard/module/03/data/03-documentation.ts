import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage03Documentation: StageDocumentation = {
  stage: '03',
  title: 'Consolidação funcional',
  objective: 'Consolidar domínios, módulos, funcionalidades, estados e riscos.',
  input: ['docs/03.md'],
  output: ['Especificação funcional consolidada'],
  status: 'passed',
  sections: [],
  decisions: ['Priorizar núcleo estreito', 'Revisão humana no core'],
  risks: ['Escopo expansivo', 'Adoção baixa por complexidade'],
  hypotheses: ['IA deve ser governada', 'Governança é parte da experiência'],
  criteria: ['Cobertura funcional', 'Estados globais', 'permissões'],
  sources: [{ label: '03.md', path: 'docs/03.md' }],
  files: ['docs/03.md'],
  actions: ['Validar módulos', 'Mapear dependências'],
  states: ['ready', 'saving', 'warning', 'error'],
  auditEvents: ['spec.updated'],
  diagrams: ['Domínios funcionais'],
  dataBlocks: [],
};
