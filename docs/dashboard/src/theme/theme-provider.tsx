import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { useMemo, useState, type CSSProperties, type PropsWithChildren } from 'react';
import { createDocumentationTheme } from './theme';
import type { ThemeMode } from './tokens';

type ModeState = ThemeMode | 'system';

export function DocumentationThemeProvider({ children }: PropsWithChildren) {
  const [mode, setMode] = useState<ModeState>('system');

  const resolvedMode: ThemeMode =
    mode === 'system' ? (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode;

  const theme = useMemo(() => createDocumentationTheme(resolvedMode), [resolvedMode]);

  return (
    <div data-theme={mode === 'system' ? undefined : mode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div style={styles.toolbar}>
          <span>Theme</span>
          <button type="button" onClick={() => setMode('light')}>Claro</button>
          <button type="button" onClick={() => setMode('dark')}>Escuro</button>
          <button type="button" onClick={() => setMode('system')}>Sistema</button>
        </div>
        {children}
      </MuiThemeProvider>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  toolbar: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '12px 20px',
    backdropFilter: 'blur(14px)',
    background: 'color-mix(in srgb, var(--color-surface) 78%, transparent)',
    borderBottom: '1px solid var(--color-border-subtle)',
  },
};
