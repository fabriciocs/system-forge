# Direção Estética

## Frase-diretriz

Uma plataforma de governança e criação de sistemas que parece uma estação de controle editorial, precisa e confiável, não um SaaS genérico.

## Sinais Observados

### Evidências

- O produto é multi-tenant enterprise.
- Há forte presença de governança, auditoria, billing, LGPD e segurança.
- A plataforma produz documentos, versões e rastreabilidade.
- O fluxo é denso em informações, etapas, estados e validações.

### Inferências

- O usuário principal tende a tomar decisões críticas em contexto de alta confiança.
- A interface precisa reduzir ambiguidade e favorecer leitura estrutural.
- A estética deve reforçar autoria, controle e documentação, não apenas operação transacional.

### Lacunas

- Não há marca existente informada.
- Não há diretriz cromática já definida.
- Não há sistema visual prévio a preservar.

## Direções Consideradas

### 1. Editorial Control Plane

- Aparência de central de comando documental.
- Hierarquia tipográfica forte.
- Painéis em camadas, grids precisos e densidade controlada.
- Bom encaixe para documentos, timelines e auditoria.

### 2. Precision Laboratory

- Visual mais técnico, limpo e clínico.
- Muito branco, linhas finas, tokens rigorosos.
- Excelente legibilidade, mas risco de ficar frio e genérico.

### 3. Dark Operations Console

- Forte presença noturna e contraste alto.
- Sensação de monitoramento e operação crítica.
- Bom para impacto, mas pode cansar em leitura longa e comprometer acessibilidade se usado como base universal.

## Matriz de Decisão

| Critério | Editorial Control Plane | Precision Laboratory | Dark Operations Console |
| --- | --- | --- | --- |
| Adequação ao produto | Alta | Alta | Média |
| Diferenciação | Alta | Média | Média |
| Legibilidade | Alta | Alta | Média |
| Acessibilidade | Alta | Alta | Média |
| Escalabilidade | Alta | Alta | Média |
| Compatibilidade com Material Design 3 | Alta | Alta | Alta |

## Direção Escolhida

### Editorial Control Plane

Escolha baseada na combinação de:

- alta densidade de informação;
- necessidade de rastreabilidade;
- presença de documentos e versionamento;
- governança enterprise;
- distinção suficiente para evitar o visual SaaS padrão.

## Princípios Visuais

- Estrutura primeiro, decoração depois.
- Densidade alta, mas com respiro calculado.
- Hierarquia tipográfica explícita.
- Componentes com bordas, separadores e estados claros.
- A interface deve parecer auditável.
- O layout precisa funcionar como tela de leitura e de comando ao mesmo tempo.

## Atributos Visuais

- Personalidade: precisa, institucional, editorial, confiável.
- Composição: modular, em colunas, com blocos bem definidos.
- Densidade: média-alta, com variação por contexto.
- Tipografia: sans condensada para títulos e sans legível para corpo, com contraste forte de peso.
- Cor: base neutra sofisticada com acentos controlados e cores de estado bem separadas.
- Forma: cantos discretamente arredondados, sem exagero macio.
- Iconografia: linear, funcional, consistente.
- Elevação: sutil; prefira bordas, sombras leves e separação por superfície.
- Motion: mínimo e intencional, focado em transições de contexto e feedback.

## Temas

### Claro

- Fundo principal claro, não branco puro.
- Superfícies escalonadas com contraste moderado.
- Acentos usados para foco, estado ativo e progressão.
- Tabelas, painéis e documentos devem permanecer legíveis em grandes volumes.

### Escuro

- Fundo escuro técnico, com superfícies diferenciadas por elevação e borda.
- Evitar pretos puros e brilho excessivo.
- Acentos devem manter legibilidade em textos longos e estados críticos.
- O modo escuro deve preservar a sensação editorial, não virar painel gamer.

### Foco Visível

- Estados de foco sempre perceptíveis por contorno, não apenas por cor.
- Foco deve sobreviver em ambos os temas e em componentes densos.

### Movimento Reduzido

- Respeitar `prefers-reduced-motion`.
- Quando o movimento estiver reduzido, remover deslocamentos e simplificar transições.
- Feedback deve continuar claro por meio de cor, opacidade e estado.

## Anti-padrões

- Dashboard corporativo genérico.
- Gradientes roxos padrão de SaaS.
- Cards inflados com pouco conteúdo.
- Ícones ilustrativos sem função.
- Glassmorphism excessivo.
- Animações decorativas constantes.
- Layouts com baixa densidade que escondem informação.
- Componentes sem distinção de estado.

## Riscos

- Excesso de densidade pode prejudicar leitura se a hierarquia falhar.
- Uma estética muito editorial pode parecer estática se não houver bons estados de interação.
- Contraste fraco em temas escuros pode comprometer dados e auditoria.
- Tipografia mal calibrada pode reduzir a sensação de precisão.

## Hipóteses

- Usuários aceitarão maior densidade visual se a estrutura estiver clara.
- A estética de controle editorial reforça confiança em tarefas críticas.
- Um sistema com forte hierarquia e superfícies discretas diferencia melhor o produto de concorrentes SaaS convencionais.

## Google Stitch Specification

### Produto

Sistema Forge é uma plataforma SaaS B2B multi-tenant para criação de sistemas com IA, governança, auditoria, documentos versionados e timeline de etapas. A interface gerada no Stitch deve comunicar controle, precisão, confiança e densidade informacional sem parecer um dashboard genérico.

### Público

- Superadministradores.
- Administradores de tenant.
- Equipes de produto e operação.
- Clientes enterprise que acompanham projetos.

### Contexto

- O app trabalha com documentos, trilhas de execução, auditoria, billing, segurança e IA.
- O ambiente precisa suportar leitura prolongada, edição, revisão e monitoramento.
- A experiência deve ser mobile-first, mas otimizada para análise em tablet e desktop.

### Resultado Esperado

- Um app shell conceitual claro.
- Navegação estruturada.
- Superfícies informativas com hierarquia forte.
- Estados globais consistentes: loading, empty, error, success, warning, disabled e read-only.
- Visual alinhado com `Editorial Control Plane`, `Layered Node Frame` e os tokens da etapa `00`.

### Hierarquia

- Top bar com contexto, busca, status e ações primárias.
- Navegação lateral ou drawer em desktop.
- Conteúdo principal em blocos bem definidos.
- Painéis auxiliares para metadados, auditoria e contexto contextual.

### Densidade

- Média-alta.
- Evitar vazios decorativos.
- Priorizar informação, ordem e leitura sequencial.
- Cada bloco deve responder a uma pergunta operacional clara.

### Grid

- Base de 8 px.
- Layout responsivo com colunas elásticas.
- Área principal deve sustentar leitura, comparação e revisão.
- Espaços generosos apenas onde suportam pausa cognitiva.

### Superfícies

- Fundo principal neutro.
- Cards e painéis com bordas sutis e elevação discreta.
- Separadores preferidos a sombras pesadas.
- Use superfícies secundárias para contexto, histórico e status.

### Cores

- Fundo claro neutro como padrão.
- Tema escuro técnico como alternativa de alto contraste.
- Azul como cor principal de ação e foco.
- Âmbar para destaque e alertas moderados.
- Vermelho apenas para erro e destruição.
- Verde para sucesso e confirmação.

### Tipografia

- Títulos com sensação editorial e compacta.
- Texto de corpo altamente legível.
- Números, status e metadados podem usar mono quando úteis.
- Evitar títulos excessivamente leves ou decorativos.

### Formas

- Cantos discretamente arredondados.
- Geometria precisa.
- Ícones lineares e funcionais.
- Não usar formas lúdicas ou organicas demais.

### Elevação

- Preferir borda, contraste tonal e separação por superfície.
- Sombras apenas como suporte sutil.
- O foco deve vir da organização, não da profundidade exagerada.

### Motion

- Transições curtas e funcionais.
- Movimentos devem indicar mudança de contexto, não ornamentação.
- Em mobile, priorizar fluidez e feedback claro.
- Respeitar `prefers-reduced-motion`.

### Mobile-First

- Navegação principal condensada em drawer ou bottom navigation conforme contexto.
- Cards empilhados verticalmente.
- Conteúdo crítico sempre acima da dobra.
- Ações primárias visíveis sem exigir rolagem excessiva.

### Tablet

- Aproveitar duas colunas quando houver contexto auxiliar.
- Manter densidade equilibrada.
- Mostrar metadados laterais sem obscurecer o fluxo principal.

### Desktop

- Suportar navegação persistente.
- Exibir múltiplos painéis com hierarquia clara.
- Permitir comparação entre documento, histórico e auditoria.
- Evitar expansão excessiva sem ganho de leitura.

### App Shell Conceitual

- Shell com navegação principal, contexto atual, busca e perfil.
- Área de conteúdo com blocos compostos.
- Painel lateral opcional para contexto, filtros ou detalhes.
- Estado de carregamento global, estado vazio e estado de erro devem existir no shell.

### Acessibilidade

- Contraste suficiente em todos os estados.
- Foco visível sempre.
- Alvos de toque adequados no mobile.
- Texto legível em densidade alta.
- Sem dependência exclusiva de cor para estado.

### Restrições Negativas

- Não criar catálogo completo de telas.
- Não usar visual SaaS genérico.
- Não usar gradientes roxos padrão.
- Não usar glassmorphism.
- Não usar decoração sem função.
- Não reduzir a interface a cartões soltos.
- Não esconder metadados, auditoria ou estados em menus excessivos.

### Prompts para Stitch

#### 1. Prompt Base

Crie um app shell para uma plataforma SaaS B2B multi-tenant de criação de sistemas com IA. A interface deve parecer uma estação de controle editorial, precisa, confiável e densa em informação. Use navegação clara, superfícies neutras, hierarquia forte, estados globais explícitos e visual alinhado ao conceito Editorial Control Plane. Não gere catálogo completo de telas. Priorize estrutura, contexto, auditoria, documentos e workflow.

#### 2. Prompt Mobile

Adapte o app shell para mobile-first. Mantenha o conteúdo crítico acima da dobra, use navegação compacta, cards empilhados, ações primárias visíveis e leitura clara. Preserve densidade informacional sem sobrecarregar. Respeite contraste, foco visível e estados globais.

#### 3. Prompt Desktop

Expanda o app shell para desktop com navegação persistente, múltiplos painéis e contexto lateral. Mostre estrutura, comparação e auditoria com hierarquia editorial. Mantenha o layout preciso, modular e escalável, sem cair em dashboard genérico.

#### 4. Prompt Refinamento

Refine a interface para aumentar clareza, reduzir ruído e fortalecer a identidade Editorial Control Plane. Ajuste tipografia, espaçamento, superfícies, contrastes e estados globais. Preserve acessibilidade, densidade funcional e consistência com tokens e identidade visual.

#### 5. Prompt Verificação Visual

Verifique se a interface gerada mantém consistência com a identidade Layered Node Frame, os tokens da etapa 00 e a direção Editorial Control Plane. Confirme legibilidade, contraste, foco visível, estados globais, responsividade e ausência de clichês SaaS genéricos. Rejeite soluções com baixa densidade informacional, decoração excessiva ou perda de hierarquia.

### Checklist de Avaliação

- O app shell é claro e imediatamente compreensível.
- A densidade é adequada ao contexto enterprise.
- O layout respeita os tokens e a direção estética.
- Os estados globais estão explícitos.
- O mobile funciona sem perder hierarquia.
- O desktop amplia contexto sem excesso visual.
- O foco permanece visível.
- O contraste continua válido em claro e escuro.
- A interface não parece genérica.
- Não foram antecipadas telas finais.
