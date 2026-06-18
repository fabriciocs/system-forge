# Documentation Dashboard

This folder contains the documentation-first React application for System Forge and the artifacts that explain how it is structured.

## Included Artifacts

- `dashboard-map.json`
- `documentation-coverage.json`
- `README.md`
- `architecture.md`
- `implementation-notes.md`
- `documentation-coverage.md`

## Coverage

- Stage 00: bootstrap, identity, theme, assets.
- Stage 01: discovery and problem framing.
- Stage 02: market research and benchmarking.
- Stage 03: functional consolidation.
- Stage 04: domain model and lifecycle.
- Stage 05: traceability, navigation, screens, i18n, and UI conventions.

## How To Navigate

- `dashboard-map.json` defines routes, representation strategy, and coverage notes.
- `documentation-coverage.json` lists covered sources and stage status.
- `architecture.md` explains the layers and data flow.
- `implementation-notes.md` explains the actual code structure and usage patterns.
- `documentation-coverage.md` summarizes coverage and how to expand it safely.

## Runtime Summary

- React + TypeScript + Vite.
- MUI for structure and accessibility-friendly primitives.
- Local shell, providers, routes, search, and widgets.
- Strict TypeScript and modular stage pages.

## Commands

From `docs/dashboard`:

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Notes

- The implementation is local and document-driven.
- There is no backend, persistence, or external API integration.
- Existing coverage files and route metadata are kept in sync with the codebase.
