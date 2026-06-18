import type { NavigationRoute } from '@/core/navigation';

export interface SearchFilter {
  query: string;
  stage?: string;
  contentType?: string;
  status?: string;
}

export function filterRoutes(routes: NavigationRoute[], filter: SearchFilter) {
  const query = filter.query.trim().toLowerCase();

  return routes.filter((route) => {
    const matchesQuery =
      query.length === 0 ||
      [route.label, route.path, route.stage, route.sectionId, route.kind].some((value) =>
        value.toLowerCase().includes(query),
      );
    const matchesStage = !filter.stage || route.stage === filter.stage;
    const matchesType = !filter.contentType || route.contentType === filter.contentType;
    const matchesStatus = !filter.status || route.status === filter.status;

    return matchesQuery && matchesStage && matchesType && matchesStatus;
  });
}
