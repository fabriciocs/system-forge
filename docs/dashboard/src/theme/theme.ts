import { createTheme } from '@mui/material/styles';
import { tokens, type ThemeMode } from './tokens';

export function createDocumentationTheme(mode: ThemeMode) {
  const current = tokens[mode];

  return createTheme({
    palette: {
      mode,
      primary: { main: current.color.brand, contrastText: current.color.brandOn },
      secondary: { main: current.color.accent },
      success: { main: current.color.success },
      warning: { main: current.color.warning },
      error: { main: current.color.danger },
      info: { main: current.color.info },
      background: {
        default: current.color.bg,
        paper: current.color.surface,
      },
      text: {
        primary: current.color.textPrimary,
        secondary: current.color.textSecondary,
      },
      divider: current.color.borderSubtle,
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 8,
    typography: {
      h1: { fontFamily: current.typography.display, fontWeight: 700, lineHeight: 1.05 },
      h2: { fontFamily: current.typography.display, fontWeight: 700, lineHeight: 1.1 },
      h3: { fontFamily: current.typography.display, fontWeight: 600, lineHeight: 1.15 },
      h4: { fontFamily: current.typography.display, fontWeight: 600 },
      body1: { lineHeight: 1.6 },
      body2: { lineHeight: 1.55 },
      caption: { letterSpacing: '0.04em', textTransform: 'uppercase' },
      button: { textTransform: 'none', fontWeight: 600 },
      fontFamily: current.typography.body,
      fontSize: 16,
    },
    shadows: [
      'none',
      current.shadow[1],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
      current.shadow[2],
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            colorScheme: mode,
            backgroundColor: current.color.bg,
          },
          body: {
            background:
              mode === 'dark'
                ? 'radial-gradient(circle at top, rgba(96,165,250,0.12), transparent 32%), linear-gradient(180deg, #0B1220 0%, #111827 100%)'
                : 'linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%)',
            color: current.color.textPrimary,
          },
          '*::selection': {
            backgroundColor: current.color.brand,
            color: current.color.brandOn,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            border: `1px solid ${current.color.borderSubtle}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            minHeight: 40,
          },
        },
      },
    },
  });
}
