# Core Transversal — ForgeFlow AI

## 1. Escopo do core

O core contém capacidades comuns a toda a aplicação: app shell, identidade de sessão, autenticação, resolução de tenant e escopo, navegação, autorização, feature flags, tema, locale, timezone, estados globais, notificações, auditoria visual, privacidade e acessibilidade.

## 2. Fora do core

Projetos, timelines, prompts, agentes, documentos, especialistas, billing e LGPD permanecem módulos de negócio. O core fornece contratos e infraestrutura conceitual, mas não suas regras específicas.

## 3. App shell

- Top app bar com contexto atual, busca, notificações, ajuda e conta.
- Drawer/rail contextual conforme viewport.
- Breadcrumbs e título operacional.
- Área principal com estados globais consistentes.
- Alternador de escopo: Global → Tenant → Company → Branch.

## 4. Autenticação e sessão

Estados: não autenticado, autenticando, autenticado, sessão próxima de expirar, sessão expirada, MFA pendente, conta bloqueada e acesso suspenso. A recuperação deve preservar destino seguro quando possível.

## 5. Contexto multi-tenant

Todo acesso resolve `scopeType`, `tenantId`, `companyId`, `branchId`, `profileId` e `userId`. Mudança de contexto invalida caches contextuais e recalcula menus, permissões, feature flags e dados visíveis.

## 6. Contratos conceituais

```ts
interface AppContext {
  scopeType: 'GLOBAL'|'TENANT'|'COMPANY'|'BRANCH'|'PROFILE'|'USER';
  tenantId?: string; companyId?: string; branchId?: string;
  profileId?: string; userId: string; locale: string; timezone: string;
}
interface PermissionDecision { allowed: boolean; reason?: string; obligations?: string[] }
interface NavigationItem { id: string; label: string; route: string; feature?: string; permission?: string }
```

## 7. Matriz estado → comportamento

| Estado | Comportamento |
|---|---|
| loading | Skeleton sem mudança brusca de layout |
| empty | Explica ausência e oferece ação primária quando permitida |
| error | Mostra causa acionável, correlação e tentativa de recuperação |
| no-permission | Informa restrição sem expor dados sensíveis |
| session-expired | Bloqueia ações, salva rascunho local seguro e pede nova autenticação |
| offline | Mantém leitura disponível quando possível e bloqueia mutações |

## 8. Matriz contexto → visibilidade

| Contexto | Visibilidade |
|---|---|
| Global | Tenants, planos, IA global, segurança, auditoria e billing global |
| Tenant | Empresas, usuários, projetos, consumo e configurações do tenant |
| Company | Filiais, projetos e dados da empresa |
| Branch | Operação restrita à filial |
| User/Profile | Preferências e ações pessoais permitidas |

## 9. Matriz permissão → ação

| Decisão | Ação |
|---|---|
| allowed | Exibir e habilitar |
| denied | Ocultar ou desabilitar com explicação segura |
| conditional | Solicitar MFA, justificativa ou aprovação |
| read-only | Permitir consulta e bloquear mutações |

## 10. Matriz falha → recuperação

| Falha | Recuperação |
|---|---|
| Rede | Retry exponencial e ação manual |
| Sessão | Reautenticação e retorno ao destino |
| Feature desabilitada | Explicar plano/flag e caminho de solicitação |
| Contexto inválido | Redirecionar para seletor de escopo |
| Conflito de versão | Comparar versões e preservar alterações locais |

## 11. Estados globais e notificações

Toasts apenas para confirmações efêmeras; banners para condições persistentes; dialogs para decisões críticas. Cada evento relevante registra correlação e origem.

## 12. Tema, locale e timezone

Tema claro/escuro/sistema persistido por usuário. Locale e timezone herdados do usuário, com fallback do tenant. Datas exibem timezone explícito em operações críticas.

## 13. Acessibilidade

WCAG 2.2 AA, navegação por teclado, foco visível, landmarks, labels, mensagens de erro associadas, movimento reduzido e suporte a alto contraste.

## 14. Privacidade e consentimento

Consentimentos e avisos devem ser contextuais, versionados e auditáveis. Dados sensíveis não aparecem em logs visuais ou notificações.

## 15. Requisitos não funcionais mínimos

Disponibilidade observável, resposta progressiva, idempotência em mutações críticas, rastreabilidade, proteção contra enumeração de recursos, internacionalização e resiliência a falhas de integração.

## 16. Decisões adiadas

Framework, banco de dados, provedor de identidade, estratégia de cache, mensageria e observabilidade técnica serão definidos em etapa arquitetural posterior.
