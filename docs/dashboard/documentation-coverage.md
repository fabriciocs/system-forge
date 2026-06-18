# Documentation Coverage

## Coverage Summary

The dashboard currently covers the full documentation set for stages 00 to 05.

## Source Coverage

- `docs/00.json` and `docs/00.md`: bootstrap metadata, identity, and closure.
- `docs/01.md`: discovery, need framing, hypotheses, and risks.
- `docs/02.md`: benchmark, competitors, market gaps, and trends.
- `docs/03.md`: functional consolidation, modules, states, and decisions.
- `docs/04.md`: domain model, entities, relations, and lifecycle.
- `docs/05.md`: traceability matrix, routes, screens, i18n, and wireframes.
- `docs/core.md`: system core and cross-cutting constraints.
- `docs/design.md`: design direction, brand posture, and Stitch guidance.
- `docs/theme/tokens.angular.json`: design token source.
- `docs/theme/web.css`: supporting theme stylesheet.
- `docs/i18n/pt-br.json`: interface strings.
- `docs/visual-identity/*`: assets and brand rules.
- `docs/stitch/*`: Stitch references and audit material.

## Stage Coverage Matrix

| Stage | Coverage | Main UI Destination |
| --- | --- | --- |
| 00 | Covered | Foundation cards, tokens, identity references |
| 01 | Covered | Discovery summary, risks, hypotheses |
| 02 | Covered | Comparison tables, benchmark cards, gap analysis |
| 03 | Covered | Functional maps, state chips, decision panels |
| 04 | Covered | Entity cards, lifecycle and diagram views |
| 05 | Covered | Route map, screen inventory, traceability views |

## Representation Matrix

| Content Type | Representation | Notes |
| --- | --- | --- |
| Summary content | Cards | Used for stage and concept overviews |
| Comparable data | Tables | Used for matrices, inventories, and traceability |
| Sequential content | Timelines | Used for staged flows and progressions |
| Structural content | Diagrams | Used for relations and architecture |
| Supporting detail | Lists and accordions | Used for supporting evidence and notes |
| Alternate views | Tabs | Used for switching between documentary perspectives |
| Status signals | Chips and badges | Used for stage, state, and mode visibility |

## Navigation Coverage

The canonical route catalogue includes public, authenticated, stage, and documentation routes. The shell and stage pages use the same route metadata, so menus, summaries, and breadcrumbs remain consistent.

## Limitations

- The route catalogue is local and document-driven.
- The dashboard does not currently resolve every stage subsection into a separate URL.
- Some stage modules reuse shared templates, which is intentional and documented.
- The current stage-specific data is enough for structural navigation and coverage, but not a full prose copy of every source page.

## Expansion Guidance

To add a new stage or section:

1. Add the stage documentation data.
2. Register the stage in the route catalogue.
3. Update the coverage JSON and map JSON.
4. Add the stage page and wrappers.
5. Extend search indexing if the new material must be discoverable.

