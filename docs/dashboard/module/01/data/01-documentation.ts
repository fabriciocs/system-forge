import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage01Documentation: StageDocumentation = {
  stage: '01',
  title: 'Discovery e necessidade',
  objective: 'Preservar a ideia inicial, hipóteses, riscos e validações.',
  input: ['docs/01.md', 'docs/core.md'],
  output: ['Síntese de descoberta e hipóteses abertas'],
  status: 'passed',
  sections: [],
  decisions: ['Manter multi-tenant e rastreabilidade no núcleo'],
  risks: ['Categoria ainda não validada', 'Fluxo por etapas parecer burocrático'],
  hypotheses: ['A fragmentação entre docs, workflow e priorização é a dor central'],
  criteria: ['Problema recorrente', 'modelo híbrido aceito'],
  sources: [{ label: '01.md', path: 'docs/01.md' }],
  files: ['docs/01.md'],
  actions: ['Rever perguntas de discovery', 'Abrir entrevistas'],
  states: ['ready', 'loading', 'error', 'empty'],
  auditEvents: ['discovery.reviewed'],
  diagrams: ['Fluxo principal do cliente'],
  dataBlocks: [],
};
