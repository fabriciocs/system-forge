import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import type { PropsWithChildren, ReactNode } from 'react';
import { useState } from 'react';
import { useTenant } from '@/core/providers';
import { useDocumentationNavigation } from '@/core/providers';

interface AppShellProps extends PropsWithChildren {
  sidebar: ReactNode;
  contextPanel?: ReactNode;
}

export function AppShell({ children, sidebar, contextPanel }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const tenant = useTenant();
  const navigation = useDocumentationNavigation();

  return (
    <Box sx={styles.root}>
      <a href="#main-content" style={styles.skipLink}>
        Pular para o conteúdo principal
      </a>
      <AppBar position="sticky" color="transparent" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.brandBlock}>
            <Typography variant="caption">System Forge</Typography>
            <Typography variant="h6">Documentação completa</Typography>
          </Box>
          <Box sx={styles.contextBlock}>
            <Typography variant="body2">{tenant.tenant}</Typography>
            <Typography variant="caption">{tenant.company} · {tenant.branch}</Typography>
          </Box>
          <Box sx={styles.actions}>
            <Button onClick={() => navigation.setStage('05')} size="small" variant="outlined">Ir para etapa 05</Button>
            <IconButton onClick={() => setMobileOpen(true)} sx={styles.mobileButton} aria-label="Abrir navegação">
              ☰
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} sx={styles.drawer}>
        <Box sx={styles.drawerContent}>{sidebar}</Box>
      </Drawer>

      <Box sx={styles.frame}>
        <Box component="aside" sx={styles.sidebar}>{sidebar}</Box>
        <Box component="main" id="main-content" tabIndex={-1} sx={styles.main}>
          {children}
        </Box>
        <Box component="aside" sx={styles.contextPanel}>{contextPanel}</Box>
      </Box>
    </Box>
  );
}

const styles = {
  root: { minHeight: '100vh' },
  skipLink: {
    position: 'absolute',
    left: 12,
    top: 12,
    padding: '8px 12px',
    background: 'var(--color-brand)',
    color: 'var(--color-brand-on)',
    borderRadius: 999,
    transform: 'translateY(-140%)',
    zIndex: 2000,
  },
  appBar: { borderBottom: '1px solid var(--color-border-subtle)', backdropFilter: 'blur(16px)' },
  toolbar: { display: 'flex', justifyContent: 'space-between', gap: 2 },
  brandBlock: { display: 'grid' },
  contextBlock: { marginLeft: 'auto', textAlign: 'right' as const },
  actions: { display: 'flex', gap: 1, alignItems: 'center' },
  mobileButton: { display: { xs: 'inline-flex', md: 'none' } },
  frame: { display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px minmax(0, 1fr) 320px' }, gap: 2, p: 2 },
  sidebar: { display: { xs: 'none', md: 'block' } },
  main: { minWidth: 0 },
  contextPanel: { display: { xs: 'none', md: 'block' } },
  drawer: { display: { xs: 'block', md: 'none' } },
  drawerContent: { width: 320, p: 2 },
} as const;
