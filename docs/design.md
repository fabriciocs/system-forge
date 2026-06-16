# Direção de Design — ForgeFlow AI

## 1. Frase-diretriz

**Console editorial de alta confiança para transformar ideias em sistemas governados, rastreáveis e prontos para execução.**

## 2. Produto, público e contexto

Plataforma SaaS B2B multi-tenant enterprise para criação de sistemas com IA, documentos versionados, workflows por etapas, governança global e contratação de especialistas. O público inclui superadministradores, administradores de tenants, equipes de produto, analistas, aprovadores e especialistas.

## 3. Direções consideradas

| Direção | Adequação | Diferenciação | Legibilidade | Escalabilidade | Decisão |
|---|---:|---:|---:|---:|---|
| Dark Forge | Alta | Alta | Média | Alta | Rejeitada como padrão; reservada para tema escuro |
| Editorial Control Plane | Muito alta | Alta | Muito alta | Muito alta | Selecionada |
| Neural Aurora | Média | Média | Média | Média | Rejeitada por aproximar-se de clichês de IA |

## 4. Matriz evidência → decisão

| Evidência | Decisão visual |
|---|---|
| Alta governança e auditabilidade | Estrutura editorial, grid firme, hierarquia explícita e trilhas de status visíveis. |
| Execução por etapas | Ritmo visual sequencial com linha de progresso, marcos e estados operacionais. |
| IA configurável e rastreável | Elementos de inteligência apresentados como instrumentos técnicos, não como efeitos futuristas. |
| Multi-tenant enterprise | Densidade controlada, navegação contextual e diferenciação clara entre escopos. |
| Marketplace de especialistas | Humanização pontual por perfis, avaliações e sinais de confiança. |


## 5. Atributos visuais

- **Personalidade:** precisa, confiável, progressiva, técnica e humana na medida certa.
- **Composição:** app shell disciplinado, cabeçalhos editoriais, painéis modulares, tabelas legíveis e detalhes em camadas.
- **Densidade:** média no desktop, baixa a média no mobile, com revelação progressiva.
- **Tipografia:** sans humanista para interface; mono apenas em IDs, hashes, schemas e logs.
- **Cor:** base neutra fria; cobalto como ação; ciano e menta como sinais de progressão e validação.
- **Forma:** raios moderados, superfícies contidas, linhas estruturais e ícones simples.
- **Elevação:** discreta; prioridade para contraste de superfície e borda.
- **Motion:** transições curtas para mudança de estado, progressão e contexto; nunca decorativas.

## 6. Princípios visuais

1. Tornar escopo, estado e responsabilidade visíveis.
2. Exibir IA como processo verificável, não como magia.
3. Priorizar progressão, comparação e rastreabilidade.
4. Reduzir carga cognitiva com agrupamento e revelação progressiva.
5. Preservar confiança por contraste, consistência e feedback objetivo.

## 7. Temas

### Claro
Fundo `paper`, superfícies brancas, texto `ink`, ações em cobalto e estados semânticos com contraste AA.

### Escuro
Fundo quase preto azulado, superfícies em navy, texto claro e acentos mais luminosos. Evitar preto puro em grandes áreas.

### Alto contraste e foco
Foco com anel mínimo de 3 px e offset de 2 px. Estados não dependem exclusivamente de cor. Compatível com `forced-colors`.

## 8. Responsividade

- **Mobile:** navegação inferior ou drawer, ações primárias fixadas quando necessário, cards em coluna única.
- **Tablet:** rail compacto, painéis em duas colunas quando houver espaço.
- **Desktop:** drawer persistente, área de contexto, painéis densos e visualizações comparativas.

## 9. Anti-padrões

- Gradientes neon usados como decoração genérica.
- Esferas, cérebros, circuitos e estrelas como metáforas de IA.
- Glassmorphism em áreas operacionais.
- Cards excessivos sem hierarquia.
- Sombras fortes, cantos exageradamente arredondados e cores sem função.
- Animações contínuas ou não essenciais.

## 10. Riscos e hipóteses

- A alta densidade funcional exige testes de legibilidade com usuários reais.
- O tema escuro deve preservar leitura prolongada e não virar estética “cyberpunk”.
- O nome provisório `ForgeFlow AI` deve ser validado juridicamente e comercialmente.

## 11. Especificação operacional para Google Stitch

### Prompt base
Crie um app shell mobile-first para uma plataforma SaaS B2B enterprise chamada ForgeFlow AI. Use Material Design 3, direção Editorial Control Plane, hierarquia rigorosa, superfícies claras, cobalto como ação, ciano e menta como estados de progresso. Mostre alternador de escopo, navegação contextual, status de execução, notificações e área principal modular. Não crie catálogo completo de telas.

### Prompt mobile
Crie a versão mobile do app shell com top app bar compacta, alternador de contexto, conteúdo em coluna única, navegação inferior com até cinco destinos e ações primárias acessíveis ao polegar. Preserve foco visível, estados de carregamento, vazio, erro e ausência de permissão.

### Prompt desktop
Crie a versão desktop com drawer persistente, cabeçalho contextual, breadcrumbs, seletor de tenant/empresa/filial e área principal em grid de 12 colunas. Use tabelas e painéis com densidade média e destaque mínimo para ações críticas.

### Prompt de refinamento
Refine a interface para reduzir aparência genérica de SaaS. Remova gradientes decorativos, excesso de cards, sombras fortes e elementos de IA clichês. Reforce grid, tipografia, estados, escopo e rastreabilidade.

### Prompt de verificação visual
Verifique consistência com tokens, contraste WCAG 2.2 AA, foco visível, responsividade, tema escuro, movimento reduzido, clareza dos estados globais e ausência de telas finais não solicitadas.

## 12. Checklist Stitch

- [ ] Identidade e tokens respeitados.
- [ ] Escopo global/tenant claramente visível.
- [ ] Estados globais representados.
- [ ] Mobile-first real.
- [ ] Sem clichês visuais de IA.
- [ ] Contraste e foco adequados.
- [ ] App shell conceitual, sem antecipação do catálogo completo de telas.
