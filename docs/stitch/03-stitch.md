# 03-stitch

## Feature

Sistemas e versionamento.

## Objetivo

Criar a experiência principal de criação, consulta, edição, comparação e versionamento de sistemas.

## Usuários

- Usuário operacional.
- Revisor especialista.
- Admin de tenant.

## Telas

- T11 Detalhe de sistema.
- T12 Versão do sistema.
- T13 Fila de revisão.
- T14 Revisão do sistema.

## Fluxo

1. Abrir sistema.
2. Editar metadados.
3. Enviar para revisão.
4. Comparar versões.
5. Aprovar ou pedir ajuste.

## Layout

- Cabeçalho fixo com ações.
- Duas colunas para comparação.
- Lista densa para fila de trabalho.

## Componentes

- Tabs.
- Painel lateral.
- Diff viewer.
- Comentários.
- Botões de decisão.

## Campos

- Nome.
- Descrição.
- Status.
- Tags.
- Comentário de revisão.

## Estados

- loading.
- validation.
- conflict.
- success.
- no_permission.

## Responsividade

- Mobile prioriza leitura e ação.
- Tablet mantém comparação parcial.
- Desktop usa diff lado a lado.

## Acessibilidade

- Labels persistentes.
- Feedback textual.
- Navegação por teclado em comparação.

## i18n

- Reutilizar chaves de `system` e `review`.

## Restrições

- Não fechar regras de versão fora do DER.
- Não esconder diferenças relevantes no diff.

## Verificação

- As telas T11 a T14 têm wireframes nas três resoluções.
- As ações primárias e destrutivas estão explícitas.

