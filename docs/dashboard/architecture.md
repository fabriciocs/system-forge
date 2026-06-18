# Dashboard Architecture

## Purpose

The dashboard is a documentation-first React application for System Forge. Its role is to present the complete project documentation across stages 00 to 05 with traceability, progressive disclosure, and responsive navigation.

## Source Inputs

- `docs/00.json`
- `docs/00.md`
- `docs/01.md`
- `docs/02.md`
- `docs/03.md`
- `docs/04.md`
- `docs/05.md`
- `docs/core.md`
- `docs/design.md`
- `docs/theme/tokens.angular.json`
- `docs/theme/web.css`
- `docs/i18n/pt-br.json`
- `docs/visual-identity/*`
- `docs/stitch/*`

## Architecture Overview

The implementation is split into five layers:

1. Theme and visual system.
2. Shell, layouts, providers, and error handling.
3. Navigation, search, and documentation metadata.
4. Stage modules and content widgets.
5. Coverage and map documents.

The application does not rely on external services. All content is local and derived from the project documentation.

## Core Layers

### Theme

- `src/theme/tokens.ts` converts the design tokens into TypeScript constants.
- `src/theme/theme.ts` builds the MUI theme.
- `src/theme/theme-provider.tsx` applies light, dark, and system modes.
- `src/styles/global.css` and `src/styles/documentation.css` define global behavior, focus, layout, and document readability.

### Shell and Layouts

- `src/core/layout/app-shell.tsx` provides skip link, header, side navigation, and contextual panel.
- `src/core/layout/public-layout.tsx`, `authenticated-layout.tsx`, `dashboard-layout.tsx`, `stage-layout.tsx`, and `documentation-layout.tsx` compose the shell into readable surfaces.
- `src/core/error/error-boundary.tsx` isolates rendering failures.

### Providers

- `src/core/providers/tenant-provider.tsx` supplies tenant, company, and branch context.
- `src/core/providers/permissions-provider.tsx` supplies permission flags.
- `src/core/providers/navigation-provider.tsx` stores the active stage and section.
- `src/core/providers/global-state-provider.tsx` provides mock global UI state.

### Search and Navigation

- `routes.ts` contains the canonical navigation route catalogue.
- `src/core/navigation/routes.ts` defines route contracts.
- `src/core/search/document-search.ts` and `documentation-search.ts` provide global filtering over documents, sections, blocks, and routes.

### Documentation Model

- `src/core/types/documentation.ts` defines shared types for stages, documents, sections, blocks, routes, and coverage.
- `src/core/documentation/documentation-data.ts` stores cross-stage documentation blocks.
- `src/core/documentation/stage-documentation.ts` defines the stage documentation contract.
- Stage-specific data lives under `module/{stage}/data`.

### Components and Widgets

- `src/core/components/*` contains reusable primitives such as cards, tables, lists, badges, and tabs.
- `src/core/widgets/*` contains higher-level document widgets such as timeline, status, diagram, and document block groups.
- `module/shared/*` contains page and header templates reused by every stage module.

## Data Flow

1. The app boots in `src/main.tsx`.
2. Theme, tenant, permissions, navigation, and global state providers are mounted.
3. `App.tsx` renders the shell and stage content.
4. Search filters the route catalogue and document content from local data.
5. The current stage page renders a shared template plus stage-specific data.
6. Widgets convert documentation into readable cards, tables, lists, timelines, and diagrams.

## Representation Strategy

- Cards are used for summaries and discrete concepts.
- Tables are used for comparable data, traceability, and inventories.
- Lists are used for compact reading of bullets and states.
- Badges are used for status and mode signaling.
- Tabs are used for alternate views and progressive disclosure.
- Timelines are used for ordered or staged content.
- Diagrams are used for conceptual structure and relationships.
- Full text remains accessible through source references and stage content.

## Why These Choices

- The project documentation is dense and stage-based, so a modular shell is necessary.
- The design direction is editorial, not app-store generic, so hierarchy and spacing matter.
- The documentation should be scannable without hiding source fidelity.
- A single shared data model reduces duplication across modules.

## Limitations

- There is no real backend, persistence layer, authentication provider, or external search service.
- Navigation is document-driven and local to the dashboard implementation.
- The current stage data is intentionally partial in UI terms where the original documentation is not yet rendered as a large on-screen dossier.
- The dashboard is ready for expansion, but not every future stage feature is implemented.

## Commands

From `docs/dashboard`:

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Adding New Content

### Add a new stage

1. Add stage data under `module/{stage}/data/{stage}-documentation.ts`.
2. Add a page under `module/{stage}/page/{stage}-page.tsx`.
3. Add the stage component wrappers under `module/{stage}/components/`.
4. Register the stage in `routes.ts` and in the shell stage navigation.
5. Update `dashboard-map.json` and `documentation-coverage.json`.

### Add a new section or content type

1. Add the section to the stage documentation data.
2. Map the section to an appropriate widget in `src/core/widgets`.
3. Update search indexing if the new content needs global discovery.
4. Record the new destination in the coverage documents.

## Decision Log

- The app uses shared templates instead of fully bespoke modules for each stage.
- The shell uses local state and providers rather than a server-backed navigation store.
- MUI was selected for stable layout primitives and accessibility defaults.
- The codebase intentionally keeps documentation data local and typed.

