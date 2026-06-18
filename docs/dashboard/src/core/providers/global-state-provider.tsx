import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react';

export type GlobalState = 'ready' | 'loading' | 'error' | 'empty';

interface GlobalStateValue {
  state: GlobalState;
  setState: (state: GlobalState) => void;
  message: string;
}

const GlobalStateContext = createContext<GlobalStateValue | null>(null);

export function GlobalStateProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<GlobalState>('ready');

  const message = useMemo(() => {
    switch (state) {
      case 'loading':
        return 'Carregando conteúdo documental.';
      case 'error':
        return 'O conteúdo não pôde ser carregado.';
      case 'empty':
        return 'Nenhum conteúdo disponível.';
      default:
        return 'Sistema pronto para leitura.';
    }
  }, [state]);

  const value = useMemo(() => ({ state, setState, message }), [state, message]);

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within GlobalStateProvider');
  }

  return context;
}
