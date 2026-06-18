import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';

interface ErrorBoundaryProps extends PropsWithChildren {
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Documentation dashboard error boundary captured an error.', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={styles.fallback}>
            <h1>Falha ao carregar a interface</h1>
            <p>A aplicação encontrou um erro inesperado e manteve o restante do shell isolado.</p>
            <pre style={styles.pre}>{this.state.error?.message ?? 'Erro desconhecido'}</pre>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

const styles: Record<string, React.CSSProperties> = {
  fallback: {
    padding: 24,
    margin: 24,
    borderRadius: 16,
    background: 'var(--color-surface)',
    color: 'var(--color-text-primary)',
    border: '1px solid var(--color-border-subtle)',
  },
  pre: {
    overflowX: 'auto',
    padding: 16,
    background: 'var(--color-surface-raised)',
    borderRadius: 12,
  },
};
