import type { StageDocumentation } from '../../../../src/core/documentation/stage-documentation';

export const stage04Documentation: StageDocumentation = {
  stage: '04',
  title: 'Domínio e DER',
  objective: 'Inventariar entidades, relações, ciclo de vida e auditoria.',
  input: ['docs/04.md'],
  output: ['Modelo conceitual do domínio de dados'],
  status: 'passed',
  sections: [],
  decisions: ['Tenant como fronteira primária', 'Auditoria imutável'],
  risks: ['Granularidade excessiva', 'Segredos expostos'],
  hypotheses: ['Versionamento é um princípio estrutural'],
  criteria: ['Entidades rastreáveis', 'Mermaid conceitual'],
  sources: [{ label: '04.md', path: 'docs/04.md' }],
  files: ['docs/04.md'],
  actions: ['Inspecionar entidades', 'Validar relações'],
  states: ['ready', 'processing-ai', 'error'],
  auditEvents: ['der.generated'],
  diagrams: ['ER diagram'],
  dataBlocks: [],
};
