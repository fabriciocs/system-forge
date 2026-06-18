# 01-stitch

## Feature

Acesso e onboarding.

## Objetivo

Gerar e refinar os fluxos públicos de entrada no produto com foco em conversão, autenticação e início assistido.

## Usuários

- Visitante.
- Comprador.
- Novo usuário autenticado.

## Telas

- T01 Landing page.
- T02 Planos.
- T03 Criar conta.
- T04 Login.
- T05 Recuperação de senha.
- T06 Confirmação de email.
- T08 Onboarding.

## Fluxo

1. Explorar produto.
2. Avaliar plano.
3. Criar conta ou entrar.
4. Confirmar email.
5. Concluir onboarding.

## Layout

- Hero editorial.
- Formulários densos com labels persistentes.
- Cards comparativos.
- Etapas guiadas.

## Componentes

- Header público.
- Botões primários e secundários.
- Formulários de autenticação.
- Stepper de onboarding.
- Mensagens de erro e confirmação.

## Campos

- Nome.
- E-mail.
- Senha.
- Confirmação de senha.
- Aceite de termos.

## Estados

- loading.
- validation.
- error.
- offline.
- session_expired.

## Responsividade

- Mobile-first.
- Tablet com empilhamento controlado.
- Desktop com layout de duas colunas.

## Acessibilidade

- Foco visível.
- Teclado completo.
- Erros textuais.
- Contraste AA.

## i18n

- Reutilizar chaves de `auth`, `context` e `navigation` em `./docs/i18n/pt-br.json`.

## Restrições

- Não introduzir novos campos fora do catálogo.
- Não transformar onboarding em fluxo de implementação.

## Verificação

- Os wireframes de T01 a T08 existem nas três resoluções.
- As chaves de autenticação estão presentes no catálogo i18n.
- O fluxo não depende de dados sensíveis externos.

