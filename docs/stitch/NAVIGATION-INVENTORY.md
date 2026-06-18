# Navigation Inventory

## Scope

Inventário conceitual de rotas, áreas, telas e condições de navegação para Stitch e orientação de UX.

## Table

| Area | Route | Screen | Origin | Destination | Condition | Profile | i18n key |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Public | `/` | Landing page | `05.md` section 8 | `/signup`, `/login`, `/pricing` | Access public | Visitor, buyer | `nav.public.home` |
| Public | `/pricing` | Planos | `05.md` section 8 | `/signup`, `/login` | CTA selected | Visitor, buyer | `nav.public.pricing` |
| Auth | `/signup` | Criar conta | `05.md` section 8 | `/verify-email` | Valid signup | Visitor | `nav.auth.signup` |
| Auth | `/login` | Login | `05.md` section 8 | `/forgot-password`, `/context/select`, `/app/dashboard` | Valid credentials | All authenticated profiles | `nav.auth.login` |
| Auth | `/forgot-password` | Recuperação | `05.md` section 8 | `/login` | Token valid | All | `nav.auth.forgot_password` |
| Auth | `/verify-email` | Confirmação de email | `05.md` section 8 | `/onboarding` | Email confirmed | New user | `nav.auth.verify_email` |
| Context | `/context/select` | Seleção de contexto | `05.md` section 8 | `/app/dashboard` | Multiple tenants/units | Authenticated user | `nav.context.select` |
| Onboarding | `/onboarding` | Boas-vindas | `05.md` section 8 | `/app/dashboard` | First access | New user | `nav.onboarding` |
| App | `/app/dashboard` | Dashboard do tenant | `05.md` section 8 | `/app/system/:id`, `/app/review/:id` | Context resolved | Authenticated | `nav.app.dashboard` |
| App | `/app/system/:id` | Sistema | `05.md` section 8 | `/app/system/:id/version/:versionId`, `/app/review/:id` | Access granted | Operational user | `nav.app.system` |
| App | `/app/review/:id` | Revisão | `05.md` section 8 | `/app/system/:id` | Pending item | Reviewer, specialist | `nav.app.review` |
| Governance | `/app/audit` | Auditoria | `05.md` section 8 | query filters | Read permission | Admin, compliance | `nav.app.audit` |
| Settings | `/app/settings` | Configuração | `05.md` section 8 | tenant/plan/flags subroutes | Manage permission | Tenant admin | `nav.app.settings` |
| Integrations | `/app/integrations` | Integrações | `05.md` section 8 | integration detail | Manage permission | Admin, ops | `nav.app.integrations` |
| Billing | `/app/billing` | Billing | `05.md` section 8 | usage/plan subroutes | Commercial access | Buyer, admin | `nav.app.billing` |

## Notes

- All journeys start from landing page or an explicit return to landing when unauthenticated.
- There are no orphan routes in this inventory.
- This inventory is conceptual and does not define implementation.
