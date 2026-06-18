# 02-stitch

## Feature

Contexto e shell.

## Objetivo

Estruturar a navegação autenticada, a seleção de contexto e o shell operacional.

## Usuários

- Usuário autenticado.
- Admin de tenant.
- Usuário operacional.

## Telas

- T07 Seleção de contexto.
- T09 Dashboard do tenant.
- T10 Lista de sistemas.
- T24 Estados globais compartilhados.

## Fluxo

1. Selecionar tenant, empresa ou unidade.
2. Entrar no dashboard.
3. Navegar entre sistemas.
4. Resolver estados globais quando houver bloqueio.

## Layout

- Shell com navegação lateral.
- Área de contexto persistente.
- Dashboard com cards e listas densas.

## Componentes

- Sidebar.
- Header de contexto.
- Busca.
- Tabelas e listas.
- Banners globais.

## Campos

- Busca de contexto.
- Filtros rápidos.

## Estados

- loading.
- empty.
- error.
- no_permission.
- plan_limit.

## Responsividade

- Mobile com navegação colapsada.
- Tablet com dois painéis.
- Desktop com shell completo.

## Acessibilidade

- Navegação por teclado.
- Foco visível.
- Leitura clara de contexto ativo.

## i18n

- Reutilizar chaves de `context`, `dashboard`, `global` e `navigation`.

## Restrições

- Não duplicar padrões globais.
- Não assumir contexto ativo sem seleção válida.

## Verificação

- O shell respeita o inventário de navegação.
- Os estados globais têm feedback textual.
- O contexto ativo fica sempre visível.

