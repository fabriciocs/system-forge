# system-forge

ForgeFlow AI é uma plataforma SaaS B2B multi-tenant enterprise para transformar ideias iniciais em sistemas estruturados, documentados e prontos para evoluir com governança, IA e especialistas humanos.

## Visão geral

O produto funciona como uma "fábrica de sistemas":

- a empresa cliente cria um projeto a partir de uma ideia inicial;
- a plataforma monta uma timeline de etapas configuráveis;
- assistentes de IA executam prompts versionados e rastreáveis;
- documentos versionados são gerados ao longo do processo;
- etapas podem ser reexecutadas com novo contexto;
- especialistas podem ser contratados por hora quando necessário.

## Princípios centrais

- Multi-tenant enterprise com escopo universal de dados.
- Governança centralizada por Superadministrador.
- Workflow por etapas com estados, auditoria e versionamento.
- IA configurável, observável e segura.
- LGPD, segurança, billing e feature flags como capacidades nativas.
- CRUD padronizado com soft delete e rastreabilidade total.

## Camadas do produto

### Control Plane Global

Camada de administração máxima da plataforma. O Superadministrador gerencia tenants, planos, assinaturas, permissões, prompts, agentes de IA, modelos, templates, segurança, LGPD, auditoria, billing, feature flags e configurações globais.

### Tenant Administration Plane

Camada de administração de cada tenant. Inclui usuários, empresas, filiais, projetos, consumo, integrações, documentos, especialistas contratados e limites do plano.

### Project Execution Plane

Área onde a empresa cliente cria e evolui sistemas. Aqui acontecem a entrada da ideia, o envio de arquivos, a execução das etapas, a aprovação de documentos e a contratação de especialistas.

## Módulos principais

- Projetos e timelines
- Etapas configuráveis
- Assistentes de IA e prompts versionados
- Documentos gerados e aprovações
- Especialistas, skills e contratação por hora
- Planos, assinaturas, consumo e Stripe
- Segurança enterprise e RBAC + ABAC
- LGPD e consentimentos
- Auditoria e logs

## Identidade do produto

- Nome conceitual: `ForgeFlow AI`
- Tagline: `Ideias governadas. Sistemas prontos para evoluir.`
- Direção visual: `Editorial Control Plane`

## Core transversal

O núcleo comum da aplicação cobre:

- app shell
- sessão e autenticação
- resolução de tenant e escopo
- navegação contextual
- feature flags
- estados globais
- acessibilidade
- privacidade

Arquivo de referência: [`docs/core.md`](docs/core.md)

## Direção de design

A interface foi pensada para ser editorial, precisa e confiável, com hierarquia forte, densidade controlada e sem clichês visuais de IA.

Arquivo de referência: [`docs/design.md`](docs/design.md)

## Fundação inicial

O documento de etapa 00 consolida a visão original, os papéis, a timeline macro, a modelagem conceitual e a base de governança da plataforma.

Arquivo de referência: [`docs/00.md`](docs/00.md)

## Estrutura de documentação

- [`docs/00.md`](docs/00.md): fundação inicial e visão consolidada
- [`docs/core.md`](docs/core.md): capacidades transversais do app
- [`docs/design.md`](docs/design.md): direção visual e prompts de referência

## Observações

- O repositório está orientado primeiro à especificação do produto.
- A etapa 00 não fecha decisões arquiteturais como framework, banco de dados ou observabilidade técnica.
- Os documentos em `docs/` são a fonte principal de verdade do projeto neste momento.
