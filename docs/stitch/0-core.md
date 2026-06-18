# 0-core

## Propósito

Definir os padrões globais mínimos obrigatórios para o app shell, componentes, responsividade, acessibilidade, microcopy e estados compartilhados.

## Fundamentos

- Direção visual: `Editorial Control Plane`.
- Tokens fonte: `./docs/theme/tokens.angular.json`.
- CSS base: `./docs/theme/web.css`.
- Referência estética: `./docs/design.md`.

## Regras globais

- Priorizar clareza editorial sobre ornamentação.
- Manter densidade alta, mas com hierarquia de leitura explícita.
- Não esconder estados de erro, conflito, plano ou permissão.
- Labels persistentes são obrigatórias em campos e ações críticas.
- Foco visível, navegação por teclado e contraste AA são mandatórios.

## Shell

- Header fixo com contexto ativo.
- Navegação lateral colapsável.
- Área principal para conteúdo.
- Painel lateral opcional para detalhes e comparação.
- Barra global para sessão, plano e alertas.

## Breakpoints

- Mobile: navegação colapsada, painéis empilhados.
- Tablet: dois painéis principais e filtros acessíveis.
- Desktop: shell completo, listas densas e comparação lado a lado.

## Estados globais

- `loading`, `empty`, `error`, `success`, `validation`, `conflict`, `offline`, `no_permission`, `session_expired`, `plan_limit`.

## Acessibilidade

- Foco visível.
- Teclado completo.
- Touch target adequado.
- Texto para erros e bloqueios.
- Movimento reduzido respeitado.

## Microcopy

- Permissão: explicar bloqueio e próximo passo.
- Billing: informar limite e opção de upgrade.
- IA: reforçar revisão humana.
- Integração: explicar falha e recuperação.
- Auditoria: indicar que a ação foi registrada.

