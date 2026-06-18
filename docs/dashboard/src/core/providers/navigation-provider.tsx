import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';
import type { StageId } from '@/core/types/documentation';

interface NavigationValue {
  stage: StageId;
  sectionId: string;
  setStage: (stage: StageId) => void;
  setSectionId: (sectionId: string) => void;
}

const NavigationContext = createContext<NavigationValue | null>(null);

export function NavigationProvider({ children }: PropsWithChildren) {
  const [stage, setStage] = useState<StageId>('00');
  const [sectionId, setSectionId] = useState('overview');

  const value = useMemo(() => ({ stage, sectionId, setStage, setSectionId }), [stage, sectionId]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function useDocumentationNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useDocumentationNavigation must be used within NavigationProvider');
  }

  return context;
}
