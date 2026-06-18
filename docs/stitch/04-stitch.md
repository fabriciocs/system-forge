# 04-stitch

## Feature

Auditoria e governança.

## Objetivo

Expor trilhas, relatórios, riscos e decisões de controle com leitura confiável e ação supervisionada.

## Usuários

- Stakeholder.
- Admin de tenant.
- Superadmin.
- Revisor especialista.

## Telas

- T15 Auditoria.
- T16 Relatórios.
- T23 Painel de governança.

## Fluxo

1. Abrir auditoria ou relatório.
2. Filtrar e investigar.
3. Exportar quando permitido.
4. Consolidar sinais de governança.

## Layout

- Tabelas densas.
- Painéis de resumo.
- Cards de risco e alertas.

## Componentes

- Filtros.
- Tabela.
- Timeline.
- KPI cards.
- Alertas.

## Campos

- Filtros de período.
- Filtros por ator.
- Filtros por contexto.

## Estados

- loading.
- empty.
- error.
- offline.
- no_permission.

## Responsividade

- Mobile reduz a densidade.
- Tablet preserva filtros.
- Desktop prioriza análise comparativa.

## Acessibilidade

- Contraste alto.
- Foco claro.
- Texto acionável para alertas.

## i18n

- Reutilizar chaves de `audit`, `global` e `governance`.

## Restrições

- Não expor dados além do escopo permitido.
- Não transformar relatório em dashboard genérico.

## Verificação

- As telas T15, T16 e T23 existem em wireframes.
- Exportação e restrições estão explicitadas.

