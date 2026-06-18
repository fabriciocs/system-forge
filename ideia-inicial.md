O sistema é uma plataforma SaaS B2B multi-tenant enterprise para criação de sistemas utilizando inteligência artificial, onde empresas clientes transformam ideias iniciais em projetos estruturados, percorrem uma timeline de etapas configuráveis, executam assistentes de IA, geram documentos versionados, enviam arquivos e informações adicionais, reexecutam etapas com novo contexto e podem contratar especialistas humanos por hora conforme as habilidades exigidas em cada fase.

A plataforma é administrada por um Superadministrador, que opera como camada máxima de governança do SaaS. Ele controla tenants, planos, assinaturas, funcionalidades, prompts, agentes de IA, modelos, templates, segurança, LGPD, auditoria, billing, feature flags, limites de uso, permissões e configurações globais. O arquivo de especificações define o Superadministrador como a camada mais alta de governança da plataforma multi-tenant, responsável por administração global, gestão de tenants, IA, templates, automações, monitoramento e parametrizações globais. 


---

1. Conceito principal

A plataforma funciona como uma fábrica inteligente de sistemas.

O cliente acessa a plataforma, cria um novo sistema, descreve sua ideia inicial e pode anexar:

arquivos;

imagens;

PDFs;

planilhas;

documentos;

links;

áudios;

vídeos;

prints;

referências;

materiais técnicos;

propostas;

contratos;

fluxos existentes.


Após o envio, o sistema cria um Projeto de Sistema e gera uma timeline de etapas previamente configurada pelo Superadministrador.

Cada etapa da timeline possui:

objetivo;

ordem;

assistente de IA responsável;

prompts associados;

schema de entrada;

schema de saída;

documentos de entrada;

documento de saída esperado;

skills exigidas;

permissões;

regras de aprovação;

regras de reexecução;

limites do plano;

logs;

auditoria;

possibilidade de contratação de especialista.


O resultado final é uma documentação progressiva e rastreável do sistema, podendo incluir requisitos, módulos, regras de negócio, personas, fluxos, modelo de dados, arquitetura, integrações, backlog, protótipos, documentação técnica e preparação para desenvolvimento.


---

2. Natureza do produto

O sistema combina vários tipos de produto em uma única plataforma:

2.1 Plataforma de criação de sistemas com IA

Permite criar sistemas a partir de linguagem natural, arquivos e contexto do cliente.

2.2 Plataforma de orquestração de prompts

Permite cadastrar prompts com entrada, saída, versão, modelo, parâmetros e validações.

2.3 Plataforma de assistentes configuráveis

Permite criar assistentes compostos por uma sequência ordenada de prompts.

2.4 Motor de workflow por etapas

Permite definir timelines com etapas configuráveis, dependências, documentos e estados.

2.5 Plataforma documental

Gera documentos versionados, auditáveis e aprováveis.

2.6 Marketplace de especialistas

Permite contratar especialistas por skill, etapa, disponibilidade e valor/hora.

2.7 Plataforma SaaS enterprise

Inclui multi-tenant, planos, assinaturas, billing, segurança, LGPD, auditoria, RBAC, ABAC, feature flags e controle de escopo.


---

3. Camadas operacionais

A plataforma possui três grandes planos operacionais.


---

3.1 Control Plane Global

É o plano global da plataforma, usado pelo Superadministrador.

Nesse plano, o Superadministrador controla:

tenants;

planos;

produtos Stripe;

preços Stripe;

assinaturas;

funcionalidades;

permissões;

perfis;

prompts;

agentes de IA;

modelos de IA;

templates;

documentos LGPD;

segurança;

auditoria;

billing;

feature flags;

configurações globais;

monitoramento;

custos de IA;

execuções;

especialistas;

integrações.


O arquivo define que o Superadministrador pode operar em Contexto Global ou em Tenant específico, permitindo administração global da plataforma ou operação contextualizada dentro de um tenant. 


---

3.2 Tenant Administration Plane

É o plano de administração de um tenant específico.

Pode ser usado por:

administrador do tenant;

superadministrador em contexto de tenant;

operador autorizado.


Nesse plano são gerenciados:

usuários do tenant;

empresas;

filiais;

projetos;

permissões locais;

assinatura;

consumo;

configurações;

integrações;

documentos;

uso de IA;

auditoria;

LGPD do tenant;

especialistas contratados;

limites do plano.



---

3.3 Project Execution Plane

É a área onde a empresa cliente cria e evolui sistemas.

Nesse plano, o cliente:

cria novo sistema;

informa ideia inicial;

envia arquivos;

acompanha timeline;

executa etapas;

reexecuta etapas;

envia novos dados em cada etapa;

aprova documentos;

solicita revisões;

contrata especialistas;

realiza pagamentos;

baixa documentos;

acompanha histórico.



---

4. Usuários e papéis

4.1 Superadministrador Master

Possui controle total da plataforma.

Pode:

acessar contexto global;

acessar qualquer tenant;

configurar planos;

configurar IA;

gerenciar prompts;

gerenciar agentes;

configurar segurança;

acessar billing;

editar templates;

publicar documentos LGPD;

ver auditoria global;

impersonar tenants;

suspender contas;

controlar feature flags.



---

4.2 Superadministrador Operacional

Responsável pela operação diária.

Pode:

acompanhar tenants;

monitorar execuções;

ver dashboards;

consultar logs;

atender suporte;

administrar configurações não críticas.



---

4.3 Superadministrador IA

Responsável pela governança de IA.

Pode:

cadastrar modelos;

cadastrar agentes;

cadastrar prompts;

versionar prompts;

acompanhar execuções;

monitorar tokens;

avaliar custos;

revisar erros;

configurar segurança de IA.



---

4.4 Superadministrador Financeiro

Responsável por billing e receita.

Pode:

ver assinaturas;

ver pagamentos;

acompanhar inadimplência;

processar upgrades;

processar downgrades;

consultar Stripe;

gerar relatórios financeiros.



---

4.5 Superadministrador Auditor

Perfil somente leitura.

Pode:

visualizar logs;

consultar auditoria;

acompanhar eventos críticos;

gerar relatórios;

verificar conformidade.


O arquivo define perfis como Super Admin Master, Operacional, IA, Financeiro e Auditor. 


---

4.6 Empresa cliente

É a organização que contrata a plataforma para criar sistemas.

Pode:

criar projetos;

cadastrar usuários;

administrar empresas e filiais;

contratar especialistas;

pagar horas;

aprovar documentos;

acompanhar consumo;

consultar assinatura;

baixar entregáveis.



---

4.7 Usuário da empresa cliente

Pode atuar como:

dono da conta;

administrador;

gestor de projeto;

analista;

colaborador;

aprovador;

financeiro;

visualizador.



---

4.8 Especialista

Profissional humano que pode ser contratado por etapa.

Pode:

criar perfil;

informar skills;

definir valor/hora;

informar disponibilidade;

aceitar convites;

participar de etapas;

comentar documentos;

enviar parecer;

registrar horas;

receber pagamento;

ser avaliado.



---

5. Fluxo principal do cliente

5.1 Criação de novo sistema

O cliente acessa a tela Novo Sistema.

Nessa tela ele pode informar:

nome do sistema;

ideia inicial;

problema a resolver;

público-alvo;

tipo de sistema;

arquivos;

links;

áudios;

imagens;

documentos complementares.


O sistema cria um registro Project.

Esse projeto recebe:

id;

tenant;

empresa;

filial, se aplicável;

usuário criador;

nome;

ideia inicial;

arquivos iniciais;

links iniciais;

status;

timeline vinculada;

etapa atual;

plano aplicado;

limites aplicáveis;

auditoria.



---

5.2 Geração da timeline

Após a criação do projeto, a plataforma seleciona uma timeline conforme:

tipo de sistema;

plano do cliente;

template escolhido;

configuração global;

configuração do tenant;

feature flags;

permissões;

modelo de negócio.


Exemplos de templates de timeline:

SaaS B2B;

sistema interno;

aplicativo mobile;

marketplace;

ERP;

CRM;

plataforma educacional;

e-commerce;

sistema com IA;

sistema multi-tenant;

sistema para franquias;

sistema para gestão operacional;

sistema para automação de processos.



---

5.3 Exemplo de timeline padrão

Uma timeline completa pode conter:

1. Registro da ideia inicial.


2. Análise da ideia.


3. Pesquisa de mercado.


4. Expansão da visão do produto.


5. Definição de público-alvo.


6. Personas.


7. Módulos do sistema.


8. Funcionalidades.


9. Requisitos funcionais.


10. Requisitos não funcionais.


11. Regras de negócio.


12. Fluxos e jornadas.


13. Matriz de permissões.


14. Modelo de dados.


15. Arquitetura técnica.


16. Integrações.


17. Estratégia de IA.


18. Estratégia de segurança.


19. Estratégia LGPD.


20. Backlog.


21. Estimativa técnica.


22. Prototipação.


23. Revisão por especialista.


24. Documentação final.


25. Preparação para desenvolvimento.


26. Geração inicial do sistema.




---

6. Etapas da timeline

Cada etapa é uma unidade operacional de execução.

6.1 Dados de uma etapa

A etapa deve possuir:

id;

nome;

código;

descrição;

ordem;

tipo;

status;

assistente vinculado;

prompts usados;

schema de entrada;

schema de saída;

documento de saída esperado;

arquivos permitidos;

mídias permitidas;

skills exigidas;

skills recomendadas;

permissões necessárias;

plano mínimo;

feature flag necessária;

limite de execuções;

permite especialista;

permite reexecução;

permite aprovação;

depende de etapa anterior;

regras de bloqueio;

regras de desbloqueio;

auditoria.



---

6.2 Estados da etapa

A etapa pode assumir os seguintes estados:

pendente;

bloqueada;

disponível;

aguardando entrada;

aguardando execução;

em execução;

concluída;

aprovada;

reprovada;

em revisão;

aguardando especialista;

especialista contratado;

aguardando pagamento;

aguardando aceite do especialista;

erro de execução;

erro de validação;

cancelada.



---

6.3 Entrada da etapa

O cliente pode enviar:

texto;

arquivos;

imagens;

áudios;

vídeos;

links;

comentários;

documentos;

respostas;

observações;

decisões;

restrições;

alterações de escopo;

exemplos;

prints;

referências.


Essas entradas são incorporadas ao contexto da etapa e utilizadas em nova execução ou reexecução.


---

6.4 Saída da etapa

A saída pode ser:

JSON;

Markdown;

HTML;

PDF;

DOCX;

planilha;

estrutura de backlog;

schema técnico;

especificação textual;

documentação final;

artefato técnico;

modelo de dados;

documentação de API;

wireframe textual;

proposta técnica.



---

6.5 Reexecução de etapa

A reexecução ocorre quando o cliente envia nova informação ou solicita revisão.

Antes de reexecutar, o sistema deve validar:

permissão do usuário;

escopo;

status da etapa;

limite do plano;

feature habilitada;

saldo de uso;

documentos anteriores;

arquivos novos;

motivo da reexecução;

impacto em etapas posteriores.


Ao reexecutar, o sistema cria nova versão do documento, registra logs e atualiza consumo.


---

7. Assistentes de IA

O assistente é uma entidade configurável que executa uma função especializada.

7.1 Definição

Um assistente é composto por:

dados gerais;

objetivo;

modelo padrão;

temperatura;

context window;

max tokens;

prompt base;

lista de prompts;

ordem de execução;

ferramentas associadas;

regras de entrada;

regras de saída;

versionamento;

status.


O arquivo define agentes IA como entidades autônomas configuráveis, com campos como nome, código, descrição, status, modelo padrão, temperatura, context window, max tokens e prompt base. 


---

7.2 Exemplos de assistentes

Assistente Alpha;

Assistente de Pesquisa;

Assistente de Produto;

Assistente de Requisitos;

Assistente de UX;

Assistente de Arquitetura;

Assistente de Banco de Dados;

Assistente de Segurança;

Assistente LGPD;

Assistente de Integrações;

Assistente de Backlog;

Assistente de Documentação;

Assistente de Código;

Assistente de Revisão;

Assistente de Validação.



---

7.3 Sequência de prompts

Um assistente pode executar vários prompts em ordem.

Exemplo:

Assistente de Requisitos
 ├── 1. Interpretar ideia
 ├── 2. Extrair objetivos
 ├── 3. Identificar usuários
 ├── 4. Gerar requisitos funcionais
 ├── 5. Gerar requisitos não funcionais
 ├── 6. Validar saída
 └── 7. Gerar documento final

O resultado de um prompt pode alimentar o próximo.


---

8. Prompts

O prompt é uma instrução versionada usada por assistentes.

8.1 Campos do prompt

Cada prompt deve possuir:

id;

código único;

nome;

descrição;

categoria;

versão;

status;

provider;

modelo;

temperatura;

top p;

frequency penalty;

presence penalty;

max tokens;

seed;

context window;

memória curta;

memória longa;

knowledge base;

template de entrada;

template de saída;

schema de entrada;

schema de saída;

ferramentas associadas;

APIs;

MCP servers;

web search;

banco de dados;

vector DB;

integrações;

histórico;

auditoria.


O arquivo define o cadastro de prompt com informações gerais, configuração de modelo, contexto, template de entrada, template de saída, validações e ferramentas associadas. 


---

8.2 Status do prompt

Draft;

Ativo;

Arquivado.



---

8.3 Versionamento

Todo prompt deve ser versionado.

Quando um prompt muda, execuções antigas continuam vinculadas à versão usada no momento da execução.

Isso garante:

rastreabilidade;

auditoria;

comparação;

reprodutibilidade;

segurança;

governança.



---

8.4 Schema de entrada

O schema de entrada define o contrato esperado pela IA.

Exemplo:

{
  "project_id": "string",
  "tenant_id": "string",
  "initial_idea": "string",
  "client_message": "string",
  "previous_outputs": [],
  "files": [],
  "links": [],
  "audio_transcriptions": [],
  "step_context": {},
  "business_constraints": [],
  "required_output_format": "json"
}


---

8.5 Schema de saída

O schema de saída define o formato obrigatório do resultado.

Exemplo:

{
  "title": "string",
  "summary": "string",
  "sections": [],
  "requirements": [],
  "business_rules": [],
  "risks": [],
  "recommendations": [],
  "next_steps": []
}

O sistema deve validar a resposta da IA contra esse schema antes de aceitar o documento gerado.


---

9. Execuções de IA

Toda execução de IA deve ser registrada.

9.1 Dados da execução

A execução deve armazenar:

execution id;

tenant;

empresa;

filial;

usuário;

projeto;

etapa;

assistente;

prompt;

versão do prompt;

modelo;

provider;

temperatura;

tokens;

ferramentas;

prompt final enviado;

entrada estruturada;

saída bruta;

saída validada;

documento gerado;

input tokens;

output tokens;

total tokens;

latência;

tempo de execução;

custo;

status;

erros;

retries;

logs.


O arquivo define que as execuções devem registrar identificação, configuração utilizada, entrada, saída, métricas, logs, eventos, ferramentas chamadas, erros e retry. 


---

9.2 Pipeline de execução

Autenticação
 ↓
Autorização
 ↓
Resolução de escopo
 ↓
Validação do plano
 ↓
Validação da funcionalidade
 ↓
Validação de limite de uso
 ↓
Validação LGPD e segurança
 ↓
Coleta de contexto
 ↓
Processamento de arquivos
 ↓
Transcrição de áudio
 ↓
Extração de texto
 ↓
Montagem do input
 ↓
Validação do schema de entrada
 ↓
Montagem do prompt final
 ↓
Execução do assistente
 ↓
Execução dos prompts em ordem
 ↓
Validação do schema de saída
 ↓
Geração do documento
 ↓
Versionamento
 ↓
Auditoria
 ↓
Atualização de consumo
 ↓
Liberação da próxima etapa


---

10. Documentos gerados

A plataforma deve gerar documentos estruturados, versionados e auditáveis.

10.1 Tipos de documentos

ideia inicial registrada;

análise da ideia;

pesquisa de mercado;

visão do produto;

requisitos funcionais;

requisitos não funcionais;

regras de negócio;

matriz de permissões;

personas;

jornadas;

fluxos;

modelo de dados;

arquitetura técnica;

integrações;

backlog;

estimativa;

plano de execução;

documentação final;

contrato técnico;

documentação para desenvolvimento;

documentação para geração de código.



---

10.2 Versionamento de documentos

Cada documento deve ter versões.

Cada versão deve registrar:

documento;

versão;

etapa;

execução;

assistente;

prompts usados;

modelo de IA;

usuário solicitante;

especialista envolvido;

arquivos utilizados;

data de geração;

status;

comentários;

aprovação;

auditoria.



---

10.3 Status do documento

rascunho;

gerado;

em revisão;

revisado por especialista;

aprovado;

rejeitado;

arquivado;

substituído.



---

11. Especialistas

O módulo de especialistas permite participação humana dentro da timeline.

11.1 Cadastro de especialista

O especialista informa:

nome;

e-mail;

telefone;

foto;

bio;

país;

idioma;

fuso horário;

valor/hora;

skills;

senioridade;

experiência;

certificações;

portfólio;

disponibilidade;

documentos;

dados de pagamento;

preferências de trabalho.



---

11.2 Skills

Skills são entidades administráveis.

Campos recomendados:

id;

código;

nome;

descrição;

categoria;

domínio;

nível;

status;

escopo;

auditoria.


Exemplos:

Product Management;

UX Design;

UI Design;

Arquitetura;

Backend;

Frontend;

Mobile;

DevOps;

Segurança;

LGPD;

IA;

Banco de Dados;

Stripe;

Multi-tenant;

SaaS;

Flutter;

Node.js;

Supabase;

Firebase.



---

11.3 Skills por etapa

Cada etapa pode exigir:

skills obrigatórias;

skills recomendadas;

senioridade mínima;

certificações;

experiência mínima;

valor/hora máximo;

disponibilidade.



---

11.4 Contratação de especialista

Fluxo:

Cliente acessa etapa
 ↓
Clica em Contratar Especialista
 ↓
Sistema identifica skills da etapa
 ↓
Sistema lista especialistas compatíveis
 ↓
Cliente seleciona especialista
 ↓
Cliente escolhe quantidade de horas
 ↓
Sistema calcula valor total
 ↓
Sistema aplica taxa da plataforma
 ↓
Cliente realiza pagamento
 ↓
Valor fica em custódia
 ↓
Especialista aceita
 ↓
Especialista trabalha na etapa
 ↓
Especialista registra horas e parecer
 ↓
Cliente aprova
 ↓
Plataforma libera repasse


---

11.5 Pagamento por hora

Cálculo:

valor_total = valor_hora × quantidade_horas

Exemplo:

R$ 250/h × 4 horas = R$ 1.000

A plataforma pode aplicar:

comissão;

taxa de serviço;

impostos;

taxa de processamento;

split de pagamento;

retenção em custódia;

repasse após aprovação.



---

12. Planos, funcionalidades e limites

O sistema deve possuir gestão de planos integrada a Stripe, feature flags, licenciamento e controle de consumo.

O arquivo define que a gestão de planos controla comercialização, licenciamento, ativação de funcionalidades, limites operacionais e integração com cobrança, integrada ao Stripe e ao mecanismo interno de feature flags, licenciamento e consumo. 


---

12.1 Plano

Campos:

id;

código;

nome;

descrição;

status;

tipo do plano;

Stripe Product ID;

Stripe Price ID;

tipo de cobrança;

valor;

moeda;

trial;

ordem de exibição;

destaque comercial;

criado em;

atualizado em.



---

12.2 Tipos de plano

Plano pessoal

Voltado para:

pessoa física;

consultor;

profissional autônomo;

especialista independente.


Limites típicos:

1 usuário;

1 empresa;

0 filiais;

0 equipes.


Plano empresarial

Voltado para:

empresas;

franquias;

redes;

grupos econômicos;

consultorias;

software houses.


Limites configuráveis:

usuários;

empresas;

filiais;

equipes;

perfis;

integrações;

projetos;

execuções de IA;

tokens;

armazenamento;

especialistas;

documentos;

templates;

prompts privados.



---

12.3 Funcionalidade

O plano não habilita apenas módulos. Ele habilita funcionalidades específicas.

Estrutura:

Domínio
 └── Módulo
      └── Funcionalidade

Exemplo:

Projetos
 └── Timeline
      ├── Executar etapa
      ├── Reexecutar etapa
      ├── Enviar arquivo
      ├── Enviar áudio
      ├── Exportar documento
      └── Contratar especialista

O arquivo especifica que o plano deve habilitar funcionalidades específicas, e que cada funcionalidade pode possuir limites, como registros, operações, usuários, tokens e chamadas de API. 


---

12.4 PlanFeature

Define:

plano;

funcionalidade;

habilitada;

limite de registros;

limite de operações;

limite de usuários;

limite de tokens;

limite de armazenamento;

limite mensal;

limite diário;

regra de bloqueio;

mensagem de bloqueio.



---

13. Assinaturas e billing

O módulo de assinaturas controla o ciclo de vida comercial dos tenants.

13.1 Assinatura

Cada tenant possui uma assinatura vinculada.

Campos:

plano atual;

Stripe Customer ID;

Stripe Subscription ID;

próxima cobrança;

status da assinatura;

data de contratação;

data de renovação;

data de vencimento;

ciclo;

valor;

histórico.



---

13.2 Status de assinatura

TRIAL
ACTIVE
PAST_DUE
UNPAID
SUSPENDED
CANCELED
EXPIRED


---

13.3 Métricas financeiras

O dashboard financeiro deve apresentar:

MRR;

ARR;

receita total;

receita prevista;

receita recebida;

receita pendente;

receita perdida;

total de assinaturas;

assinaturas ativas;

assinaturas trial;

assinaturas suspensas;

assinaturas canceladas;

inadimplência;

novos clientes;

upgrades;

downgrades;

cancelamentos;

churn rate;

net revenue retention.



---

13.4 Stripe

A integração com Stripe deve contemplar:

produtos;

preços;

clientes;

assinaturas;

checkout sessions;

invoices;

payment intents;

charges;

webhooks;

sincronização manual;

sincronização automática;

histórico.


Webhooks relevantes:

customer.created;

customer.updated;

checkout.session.completed;

invoice.created;

invoice.paid;

invoice.payment_failed;

subscription.created;

subscription.updated;

subscription.deleted.



---

14. Segurança

O sistema deve possuir um módulo central de segurança enterprise.

14.1 Controles de segurança

políticas de autenticação;

políticas de senha;

MFA;

passkeys;

sessões;

dispositivos confiáveis;

controle de IP;

geolocalização;

APIs e tokens;

OAuth2;

OpenID Connect;

JWT;

segredos e chaves;

certificados;

criptografia;

auditoria de segurança;

SIEM;

detecção de ameaças;

incidentes;

backup;

recuperação;

segurança de IA.



---

14.2 RBAC + ABAC

A autorização deve combinar:

RBAC, baseado em perfil, função e grupo;

ABAC, baseado em tenant, empresa, filial, horário, localização, IP, dispositivo, plano e atributos do usuário.



---

14.3 MFA

Métodos suportados:

TOTP;

SMS;

e-mail;

Authenticator;

Passkey;

FIDO2;

WebAuthn.


MFA deve ser obrigatório para:

superadministradores;

ações financeiras;

publicação de documentos LGPD;

alteração de segurança;

alteração de permissões;

operações críticas de IA;

acesso a dados sensíveis.



---

14.4 Segurança de IA

A plataforma deve proteger:

prompts;

agentes;

modelos;

ferramentas;

arquivos enviados;

contexto do cliente;

dados sensíveis;

documentos gerados;

integrações;

saídas da IA.


Controles:

detecção de prompt injection;

detecção de jailbreak;

prevenção de vazamento;

mascaramento de dados sensíveis;

bloqueio de segredos;

validação de tool calls;

auditoria de execuções;

revisão de prompts críticos.



---

15. LGPD

O módulo LGPD controla documentos legais, consentimentos, políticas, finalidades, bases legais e solicitações dos titulares.

O arquivo define o módulo LGPD como responsável pela gestão centralizada de documentos legais, termos, consentimentos, políticas e registros relacionados à conformidade com a Lei Geral de Proteção de Dados, podendo disponibilizar documentos globais ou específicos por tenant. 


---

15.1 Documentos LGPD

Tipos padrão:

Política de Privacidade;

Termos de Uso;

Política de Cookies;

Política de Segurança;

Consentimento de Marketing;

Consentimento de Tratamento de Dados;

DPA;

Política de Retenção de Dados;

Código de Conduta;

Documento Personalizado.



---

15.2 LgpdDocument

Campos:

id;

código;

nome;

tipo;

categoria;

status;

versão;

tenant;

global;

data de publicação;

data de expiração;

exigir aceite;

aceite obrigatório;

requer nova aceitação;

HTML;

texto puro;

observações.



---

15.3 Aceites

Cada aceite deve registrar:

usuário;

documento;

versão;

data;

IP;

navegador;

tenant.


Aceite pode ser obrigatório:

no cadastro;

no login;

na renovação;

na contratação de especialista;

antes de pagamento;

após nova versão;

antes de criar projeto.



---

15.4 Solicitações do titular

Tipos:

acesso aos dados;

correção;

exclusão;

portabilidade;

revogação de consentimento.


Cada solicitação deve ter:

protocolo;

status;

responsável;

prazo;

histórico;

documentos;

auditoria.



---

16. Auditoria

A auditoria deve ser configurável e aplicada em toda a plataforma.

16.1 AuditConfiguration

Permite definir:

domínio;

módulo;

funcionalidade;

tela;

ação;

evento;

nível de log;

retenção;

obrigatoriedade;

escopo.



---

16.2 AuditLog

Cada log deve registrar:

id;

tenant;

empresa;

filial;

usuário;

perfil;

domínio;

módulo;

funcionalidade;

tela;

ação;

evento;

endpoint;

método HTTP;

payload de entrada;

payload de saída;

IP;

navegador;

data e hora;

status;

erro;

correlação;

execução de IA, se aplicável.


O arquivo especifica auditoria configurável por domínio, módulo, funcionalidade, tela e evento, além de logs com tenant, usuário, perfil, endpoint, payloads, IP, navegador e data/hora. 


---

17. Escopo universal de dados

Essa é uma regra estrutural obrigatória.

Todo registro da plataforma deve possuir escopo.

Nenhum dado funcional pode existir sem contexto.

17.1 Hierarquia de escopo

GLOBAL
 └── TENANT
      └── COMPANY
           └── BRANCH
                └── PROFILE
                     └── USER


---

17.2 Tipos de escopo

GLOBAL;

TENANT;

COMPANY;

BRANCH;

PROFILE;

USER.



---

17.3 BaseScopedEntity

Toda entidade funcional deve possuir:

id;

scopeType;

tenantId;

companyId;

branchId;

profileId;

userId;

visibilityRule;

createdBy;

createdAt;

updatedBy;

updatedAt;

deletedBy;

deletedAt;

deletionReason.



---

17.4 Aplicação obrigatória

O escopo deve ser aplicado em:

entidades;

APIs;

consultas;

listagens;

detalhes;

inclusões;

edições;

exclusões;

exportações;

auditorias;

eventos;

integrações;

documentos;

prompts;

templates;

configurações;

execuções de IA;

arquivos;

especialistas;

pagamentos.



---

18. CRUD universal e soft delete

Todas as funcionalidades cadastráveis devem seguir o mesmo padrão.

O arquivo define uma regra arquitetural obrigatória: toda funcionalidade deve possuir listagem, visualização, inclusão, edição, exclusão com confirmação, soft delete, auditoria, controle de escopo, controle de permissões, histórico, filtros, APIs compatíveis e suporte multi-tenant. 


---

18.1 Telas obrigatórias

Toda funcionalidade deve ter:

listagem;

visualização;

detalhamento;

inclusão;

edição;

exclusão lógica;

histórico;

auditoria.



---

18.2 Rotas padrão

/{modulo}/{funcionalidade}
/{modulo}/{funcionalidade}/{id}
/{modulo}/{funcionalidade}/novo
/{modulo}/{funcionalidade}/{id}/editar


---

18.3 Soft delete obrigatório

Nenhum dado deve ser removido fisicamente.

Proibido:

DELETE FROM tabela

Permitido:

UPDATE tabela
SET
  deleted_at = NOW(),
  deleted_by = :usuario,
  deletion_reason = :motivo
WHERE id = :id


---

19. Templates e edição HTML

A plataforma deve possuir templates reutilizáveis para:

documentos;

e-mails;

notificações;

LGPD;

etapas;

timelines;

propostas;

contratos;

documentos técnicos;

mensagens do sistema.



---

19.1 Componentes compartilhados

HtmlEditor;

HtmlRenderer;

HtmlPreview;

HtmlSanitizer;

VersionComparisonViewer.



---

19.2 Recursos do editor

modo visual;

modo código;

modo split;

preview desktop;

preview tablet;

preview mobile;

sanitização;

bloqueio de scripts;

bloqueio de javascript:;

bloqueio de iframes não autorizados.



---

20. Menus finais da plataforma

20.1 Menu Superadministrador

Superadministrador
 ├── Alternador de Escopo
 ├── Dashboard Global
 ├── Tenants
 │    ├── Dashboard Tenant
 │    ├── Usuários
 │    ├── Empresas
 │    ├── Filiais
 │    ├── Projetos
 │    ├── Auditoria
 │    ├── Consumo
 │    └── Assinatura
 ├── Planos
 │    ├── Pessoal
 │    ├── Empresarial
 │    ├── Produtos Stripe
 │    ├── Preços Stripe
 │    ├── URLs de Pagamento
 │    └── Histórico
 ├── Assinaturas
 │    ├── Dashboard
 │    ├── Assinaturas
 │    ├── Pagamentos
 │    ├── Inadimplência
 │    ├── Upgrades e Downgrades
 │    ├── Cobranças
 │    ├── Relatórios
 │    ├── Stripe Sync
 │    └── Auditoria
 ├── Funcionalidades
 ├── Perfis e Permissões
 ├── IA
 │    ├── Agentes
 │    ├── Prompts
 │    ├── Modelos
 │    ├── Execuções
 │    ├── Custos
 │    └── Configurações
 ├── Templates
 │    ├── Documentos
 │    ├── E-mails
 │    ├── Notificações
 │    ├── Timelines
 │    └── Etapas
 ├── Especialistas
 │    ├── Especialistas
 │    ├── Skills
 │    ├── Convites
 │    ├── Contratações
 │    └── Repasses
 ├── LGPD
 ├── Segurança
 ├── Auditoria
 ├── Billing
 ├── Feature Flags
 ├── Validações
 └── Configurações Globais


---

20.2 Menu Cliente

Cliente
 ├── Dashboard
 ├── Novo Sistema
 ├── Sistemas / Projetos
 │    ├── Timeline
 │    ├── Etapas
 │    ├── Documentos
 │    ├── Arquivos
 │    ├── Links
 │    ├── Comentários
 │    ├── Especialistas
 │    └── Histórico
 ├── Especialistas
 │    ├── Buscar Especialista
 │    ├── Contratações
 │    └── Pagamentos
 ├── Documentos
 ├── Arquivos
 ├── Usuários
 ├── Empresas
 ├── Filiais
 ├── Assinatura
 ├── Consumo
 ├── Configurações
 └── LGPD / Termos


---

20.3 Menu Especialista

Especialista
 ├── Dashboard
 ├── Perfil
 ├── Skills
 ├── Convites
 ├── Trabalhos Ativos
 ├── Etapas Vinculadas
 ├── Horas
 ├── Pagamentos
 ├── Avaliações
 └── Configurações


---

21. Entidades principais finais

21.1 Administração

SuperAdminUser;

Tenant;

Company;

Branch;

TenantUser;

GlobalSettings;

TenantConfiguration;

SystemConfiguration;

FeatureFlag.


21.2 IA

AiAgent;

AiPrompt;

AiPromptVersion;

AiModel;

AiExecution;

AiExecutionLog;

AiProvider;

AiTool;

KnowledgeBase.


21.3 Projetos

Project;

ProjectFile;

ProjectLink;

ProjectAudio;

ProjectTimeline;

ProjectStep;

StepExecution;

GeneratedDocument;

DocumentVersion;

Approval;

Comment.


21.4 Timeline

TimelineTemplate;

TimelineTemplateStep;

StepTemplate;

StepRequiredSkill;

StepInputSchema;

StepOutputSchema;

StepDocumentDefinition.


21.5 Especialistas

Specialist;

Skill;

SpecialistSkill;

SpecialistInvitation;

SpecialistContract;

SpecialistContractHour;

SpecialistPayment;

SpecialistPayout;

SpecialistReview.


21.6 Planos e billing

Plan;

PlanFeature;

Feature;

FeatureLimit;

Subscription;

SubscriptionHistory;

SubscriptionUsage;

Payment;

Invoice;

StripeCustomer;

StripeProduct;

StripePrice;

StripeSubscription;

StripeInvoice;

StripeWebhook;

StripeCheckoutSession.


21.7 Segurança

Profile;

ProfilePermission;

SecurityPolicy;

AuthenticationPolicy;

PasswordPolicy;

MfaPolicy;

SessionPolicy;

AccessPolicy;

TrustedDevice;

IpRule;

GeoRule;

ApiKey;

OAuthClient;

SecretVault;

Certificate;

EncryptionPolicy;

SecurityEvent;

SecurityIncident;

ThreatDetectionRule;

AiSecurityPolicy.


21.8 LGPD

LgpdDocument;

LgpdDocumentVersion;

LgpdAcceptance;

LgpdCategory;

LgpdPurpose;

LgpdLegalBasis;

LgpdRequest;

LgpdRequestHistory;

LgpdConfiguration;

LgpdAuditLog.


21.9 Auditoria

AuditConfiguration;

AuditEvent;

AuditLog;

SecurityAuditLog;

AiExecutionAuditLog;

LgpdAuditLog.



---

22. Definição final consolidada

A definição final do sistema é:

> Uma plataforma SaaS B2B multi-tenant enterprise para criação de sistemas com inteligência artificial, onde o Superadministrador configura toda a governança da plataforma — tenants, empresas, filiais, planos, assinaturas, funcionalidades, limites, permissões, segurança, LGPD, auditoria, billing, prompts, agentes de IA, modelos, templates, timelines, etapas, documentos e especialistas — enquanto empresas clientes criam projetos de sistemas a partir de ideias iniciais, enviam textos, arquivos, links, áudios e imagens, percorrem uma timeline de etapas configuráveis, executam assistentes de IA compostos por prompts versionados, geram documentos estruturados e versionados, reexecutam etapas com novos contextos, aprovam entregáveis e contratam especialistas humanos por hora conforme as skills exigidas em cada etapa.



Em termos arquiteturais, o sistema é uma fábrica de sistemas orientada a IA, documentos, etapas, escopo e governança, com:

multi-tenant;

multiempresa;

matriz e filial;

escopo universal de dados;

soft delete obrigatório;

CRUD padronizado;

auditoria total;

RBAC + ABAC;

segurança enterprise;

LGPD nativo;

billing com Stripe;

planos granulares por funcionalidade;

controle de consumo;

prompts versionados;

agentes configuráveis;

execução rastreável de IA;

documentos versionados;

marketplace de especialistas;

pagamento por hora;

custódia e repasse;

dashboards globais;

dashboards por tenant;

controle centralizado pelo Superadministrador.


A plataforma não é apenas um gerador de sistemas por prompt. Ela é uma infraestrutura completa para transformar ideias em sistemas especificados, documentados, revisados, governados, auditados e preparados para desenvolvimento, combinando IA, workflow, documentação, segurança, billing e especialistas humanos em um único ecossistema SaaS enterprise.
