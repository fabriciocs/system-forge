# 05-stitch

## Feature

Integrações e billing.

## Objetivo

Permitir conexão com serviços externos, monitorar uso e gerir cobrança e limites.

## Usuários

- Admin de tenant.
- Financeiro.
- Superadmin.

## Telas

- T17 Integrações.
- T18 Detalhe de integração.
- T19 Billing.
- T20 Uso e limites.

## Fluxo

1. Ver integrações disponíveis.
2. Conectar e testar.
3. Consultar billing.
4. Acompanhar consumo e limites.

## Layout

- Lista e detalhe com inspeção lateral.
- Resumo financeiro com cards e tabelas.

## Componentes

- Cards.
- Tabela de uso.
- Formulários de credenciais.
- Botões de teste e upgrade.

## Campos

- URL de webhook.
- Credenciais.
- Dados fiscais.
- Preferências de cobrança.

## Estados

- loading.
- error.
- conflict.
- plan_limit.
- no_permission.

## Responsividade

- Mobile prioriza leitura de estado.
- Tablet mantém formulários e resumo.
- Desktop permite monitoramento lado a lado.

## Acessibilidade

- Mensagens de falha específicas.
- Foco visível.
- Labels persistentes.

## i18n

- Reutilizar chaves de `integration`, `billing` e `global`.

## Restrições

- Não exigir integração real para prototipação.
- Não ocultar limite ou bloqueio de plano.

## Verificação

- As telas T17 a T20 existem em wireframes.
- Os estados de conexão, cobrança e limite estão documentados.

