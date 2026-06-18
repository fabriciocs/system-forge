# Implementation Notes

## What Exists Now

The dashboard contains:

- A Vite + React + TypeScript application.
- Strict TypeScript configuration.
- MUI theme and a local token conversion layer.
- Shell, layouts, providers, navigation, search, widgets, and stage modules.
- Local documentation coverage and map files.

## Stage Coverage

### Stage 00

- Bootstrap, identity, tokens, visual direction, and assets.
- Rendered as a reusable stage page with summary and source references.

### Stage 01

- Discovery, problem framing, risks, hypotheses, and validation scope.
- Rendered with summary, documentation blocks, and state chips.

### Stage 02

- Market research, competitors, gaps, and opportunity framing.
- Rendered as a comparative and structured module.

### Stage 03

- Functional consolidation, domains, modules, states, automation, and reports.
- Rendered as a structured stage page with traceable metadata.

### Stage 04

- Data domain, entities, relationships, lifecycle, and auditability.
- Rendered as a data-oriented module.

### Stage 05

- Traceability, navigation inventory, routes, screens, i18n, and wireframes.
- Rendered as the navigation-heavy stage and reflected in the canonical route map.

## Representation Rules

- Cards are used for stage summaries and discrete concepts.
- Tables are used for inventories, matrices, and comparable data.
- Lists are used for state sets and compact supporting details.
- Timelines are used for ordered information and stage progression.
- Diagrams are used for relationships and structural explanation.
- Tabs, accordions, and drawers are available as the next extension layer, but the current implementation only uses the portions that are directly justified by the content.

## Mocks and Data

- Mock state exists only for UI exploration.
- The mock layer does not replace documentation content.
- No sensitive or external data is fetched.
- The stage modules consume local data files only.

## i18n

- `docs/i18n/pt-br.json` is the source of interface text.
- `src/core/i18n/pt-br.ts` provides a local typed accessor.
- The app currently uses the existing Portuguese strings directly.

## Motion

- Motion is constrained to small feedback and orientation cues.
- Reduced-motion preference is respected through CSS and helper logic.
- There are no decorative motion loops or gratuitous animations.

## Accessibility

- Semantic HTML is used first.
- Focus-visible styles are present globally.
- The app shell provides a skip link.
- Tables and lists remain readable on narrow screens.
- The application avoids hiding source content behind inaccessible interactions.

## Existing Constraints

- No server, no persistence, and no secrets.
- No external search APIs.
- No real tenant store or permission backend.
- No production router contract beyond the local route catalogue.

## How To Expand Safely

1. Extend the stage documentation data first.
2. Add or reuse a widget that matches the source content type.
3. Add a page and component wrappers for the stage.
4. Register the route and update coverage artifacts.
5. Run `npm run typecheck` and `npm run build`.

## Rejected Alternatives

- Using a single giant page for all stages.
- Replacing the documentation with generated placeholders.
- Creating fake remote data services for local UI exploration.
- Using motion-heavy patterns that obscure reading.

