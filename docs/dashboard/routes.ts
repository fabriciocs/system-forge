import type { NavigationRoute } from './src/core/navigation/routes';

export const navigationRoutes: NavigationRoute[] = [
  { path: '/', label: 'Landing', stage: '00', kind: 'public', sectionId: 'overview', contentType: 'summary', status: 'ready' },
  { path: '/signup', label: 'Criar conta', stage: '00', kind: 'public', sectionId: 'auth', contentType: 'summary', status: 'ready' },
  { path: '/login', label: 'Login', stage: '00', kind: 'public', sectionId: 'auth', contentType: 'summary', status: 'ready' },
  { path: '/app/dashboard', label: 'Dashboard', stage: '05', kind: 'authenticated', sectionId: 'dashboard', contentType: 'structured', status: 'ready' },
  { path: '/app/stage/00', label: 'Etapa 00', stage: '00', kind: 'stage', sectionId: 'overview', contentType: 'full', status: 'ready' },
  { path: '/app/stage/01', label: 'Etapa 01', stage: '01', kind: 'stage', sectionId: 'overview', contentType: 'full', status: 'ready' },
  { path: '/app/stage/02', label: 'Etapa 02', stage: '02', kind: 'stage', sectionId: 'overview', contentType: 'full', status: 'ready' },
  { path: '/app/stage/03', label: 'Etapa 03', stage: '03', kind: 'stage', sectionId: 'overview', contentType: 'structured', status: 'ready' },
  { path: '/app/stage/04', label: 'Etapa 04', stage: '04', kind: 'stage', sectionId: 'overview', contentType: 'structured', status: 'ready' },
  { path: '/app/stage/05', label: 'Etapa 05', stage: '05', kind: 'stage', sectionId: 'overview', contentType: 'structured', status: 'ready' },
  { path: '/app/docs/:stage/:sectionId', label: 'Seção documental', stage: '05', kind: 'documentation', sectionId: 'section', contentType: 'full', status: 'ready' },
];

export const routePaths = navigationRoutes.map((route) => route.path);
