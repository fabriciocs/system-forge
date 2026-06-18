# 06-stitch

## Feature

IA e configuração.

## Objetivo

Prototipar a assistência por IA e as preferências de operação, sem remover a supervisão humana.

## Usuários

- Usuário operacional.
- Admin de tenant.
- Superadmin.

## Telas

- T21 Configurações.
- T22 Assistente de IA.
- T24 Estados globais compartilhados.

## Fluxo

1. Ajustar preferências e escopo.
2. Solicitar apoio da IA.
3. Avaliar a saída.
4. Resolver estados globais quando houver bloqueio.

## Layout

- Formulários por abas.
- Canvas conversacional.
- Painel lateral com contexto e revisão.

## Componentes

- Tabs.
- Toggle.
- Select.
- Chat area.
- Prompt editor.
- Banner de supervisão.

## Campos

- Idioma.
- Fuso horário.
- Prompt.
- Objetivo da geração.

## Estados

- loading.
- validation.
- error.
- offline.
- plan_limit.

## Responsividade

- Mobile empilha editor e histórico.
- Tablet separa contexto e conversa.
- Desktop usa split view.

## Acessibilidade

- Rótulos persistentes.
- Texto claro para revisão humana.
- Navegação por teclado.

## i18n

- Reutilizar chaves de `settings`, `ai` e `global`.

## Restrições

- Não tratar a saída de IA como decisão final.
- Não expor dados fora do contexto autorizado.

## Verificação

- As telas T21, T22 e T24 existem em wireframes.
- A supervisão humana ficou explícita.

