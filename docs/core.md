# Núcleo do Sistema

## Escopo do Core

### Pertence ao core

- App shell.
- Autenticação.
- Sessão.
- Tenant e troca de contexto.
- Empresa, filial e escopo conceitual.
- Navegação global.
- Permissões.
- Feature flags.
- Tema claro e escuro.
- Locale.
- Timezone.
- Estados globais.
- Notificações.
- Auditoria visual de alto nível.
- Erros de acesso e de fluxo.
- Acessibilidade.
- Privacidade.
- Consentimento.

### Não pertence ao core

- Regras específicas de módulos de negócio.
- Fluxos de domínio detalhados.
- Modelos de dados internos de cada módulo.
- APIs e integrações específicas.
- Estratégia de banco de dados.
- Infraestrutura técnica detalhada.
- Implementação de serviços concretos.

## App Shell

- Barra principal com identidade, contexto atual, busca e ações globais.
- Navegação primária persistente em desktop e condensada em mobile.
- Área central para conteúdo da tarefa corrente.
- Painel contextual opcional para detalhes, filtros e auditoria.
- Área de notificações e estados globais.

## Autenticação e Sessão

### Contrato conceitual

- Usuário deve autenticar para acessar o sistema.
- Sessão deve carregar contexto ativo.
- A sessão deve expirar de forma previsível.
- O usuário deve conseguir recuperar acesso sem perder o contexto salvo, quando possível.

### Estados da sessão

- Não autenticado.
- Autenticado sem contexto.
- Autenticado com contexto válido.
- Sessão expirando.
- Sessão expirada.
- Sessão revogada.

### Regras

- Sessão expirada deve interromper ações sensíveis.
- Renovação de sessão deve preservar contexto quando permitido.
- Alterações críticas devem validar sessão novamente.

## Multi-Tenancy e Contexto

### Entidades conceituais

- Global.
- Tenant.
- Company.
- Branch.
- User.
- Profile.

### Contexto ativo

- Toda navegação e ação ocorre em um contexto ativo.
- O contexto define visibilidade, escopo e permissões.
- Troca de contexto deve ser explícita.
- A interface deve mostrar contexto atual de forma permanente e clara.

### Mudança de contexto

- O sistema deve validar se o usuário pode mudar de contexto.
- A troca de contexto deve atualizar dados, permissões e visibilidade.
- Mudanças de contexto não devem ocorrer silenciosamente.

## Permissões

### Princípio

- Nenhuma ação sensível deve depender apenas da rota ou da interface.
- Permissão depende de perfil, contexto e regra de escopo.

### Contrato conceitual

- Ver.
- Criar.
- Editar.
- Excluir lógico.
- Aprovar.
- Reexecutar.
- Contratar.
- Pagar.
- Publicar.
- Administrar.

### Regra

- A UI deve esconder ações proibidas e também validar no backend conceitual.
- Ausência de permissão deve ser tratada como estado explícito, não como erro genérico.

## Feature Flags

- Flags controlam disponibilidade de capacidades.
- A interface deve refletir flag ativa, inativa e restrita.
- Feature flag desabilitada deve aparecer como indisponível com explicação curta.

## Tema, Locale e Timezone

### Tema

- Tema claro como padrão.
- Tema escuro como alternativa persistida ou por preferência do sistema.
- Troca de tema não deve quebrar contraste nem estados.

### Locale

- Formato de datas, moedas e textos deve respeitar locale do usuário ou tenant.
- Mudanças de locale devem ser previsíveis e persistentes.

### Timezone

- Timezone deve afetar exibição de datas, auditoria e prazos.
- A UI deve deixar claro quando um horário está normalizado para outra zona.

## Estados Globais

### Estados principais

- Loading.
- Empty.
- Ready.
- Saving.
- Success.
- Warning.
- Error.
- Read only.
- Access denied.
- Session expired.
- Feature disabled.
- Context missing.

### Comportamento

- Todo estado deve ter mensagem e ação esperada.
- Estados de erro precisam indicar se a recuperação é possível.
- O usuário deve saber o que aconteceu, o que perdeu e o que fazer em seguida.

## Notificações

- Notificações devem ser coerentes com severidade.
- Informações críticas não devem depender apenas de toast temporário.
- Notificações persistentes devem existir para falhas, permissões e expiração de sessão.

## Auditoria Visual

- A interface deve sinalizar eventos críticos com clareza.
- Mudanças de contexto, login, logout, falha de permissão e expiração devem ser registráveis e perceptíveis.
- A auditoria visual não substitui o log, mas ajuda o usuário a entender a trilha de ação.

## Privacidade e Consentimento

- O sistema deve considerar consentimento quando houver coleta ou uso de dados sensíveis.
- Privacidade deve aparecer como estado e regra de acesso, não como texto oculto.
- O usuário deve entender quando um recurso depende de consentimento ou de política específica.

## Matrizes

### Estado → Comportamento

| Estado | Comportamento |
| --- | --- |
| Loading | Exibir indicador e bloquear ações dependentes. |
| Empty | Explicar ausência e sugerir próxima ação. |
| Saving | Manter contexto e informar progresso. |
| Success | Confirmar conclusão sem interromper fluxo. |
| Warning | Pedir atenção sem bloquear desnecessariamente. |
| Error | Explicar falha e oferecer recuperação. |
| Read only | Permitir leitura e bloquear edição. |
| Access denied | Explicar permissão ausente e orientar saída. |
| Session expired | Solicitar nova autenticação. |
| Feature disabled | Informar disponibilidade limitada. |
| Context missing | Exigir seleção de tenant ou escopo. |

### Contexto → Visibilidade

| Contexto | Visibilidade |
| --- | --- |
| Global | Configurações e governança globais. |
| Tenant | Dados e ações do tenant atual. |
| Company | Dados da empresa selecionada. |
| Branch | Dados da filial selecionada. |
| Profile | Permissões e regras associadas ao perfil. |
| User | Preferências, sessão e dados pessoais. |

### Permissão → Ação

| Permissão | Ação |
| --- | --- |
| Ver | Ler e listar conteúdo. |
| Criar | Incluir novos registros. |
| Editar | Alterar dados existentes. |
| Excluir lógico | Marcar item como removido. |
| Aprovar | Validar ou publicar conteúdo. |
| Reexecutar | Reprocessar etapa ou ação. |
| Contratar | Iniciar contratação de especialista. |
| Pagar | Autorizar pagamento. |
| Publicar | Tornar conteúdo ativo. |
| Administrar | Gerenciar configuração e acesso. |

### Falha → Recuperação

| Falha | Recuperação |
| --- | --- |
| Erro de rede | Tentar novamente e preservar entrada. |
| Erro de permissão | Solicitar acesso adequado ou trocar de contexto. |
| Sessão expirada | Reautenticar e restaurar contexto. |
| Contexto inválido | Selecionar tenant, empresa ou filial correta. |
| Feature indisponível | Explicar limitação e sugerir alternativa. |
| Erro de validação | Corrigir campos e repetir ação. |

## Requisitos Não Funcionais Mínimos

- Acessibilidade WCAG 2.2 AA como referência mínima.
- Foco visível em todos os componentes interativos.
- Contraste suficiente em temas claro e escuro.
- Suporte a navegação responsiva.
- Estado de erro e ausência sempre explicados.
- Estrutura preparada para alto volume de informação.
- Comportamento previsível em troca de contexto.

## Decisões Adiadas

- Implementação de autenticação específica.
- Escolha de provedor de identidade.
- Estratégia de persistência de sessão.
- Arquitetura de banco de dados.
- Modelo físico de multi-tenancy.
- Serviços de notificações.
- Pipeline técnico de auditoria.
- Estratégia operacional de feature flags.

## Fronteiras do Core

- O core define como o sistema existe e como o usuário se move.
- Os módulos definem o que o sistema faz.
- O core não deve ser contaminado por regras específicas de domínio.
- Mudanças no core precisam preservar continuidade de contexto, acesso e leitura.
