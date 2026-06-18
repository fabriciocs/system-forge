import { Box, Typography } from '@mui/material';

interface DiagramWidgetProps {
  title: string;
  description: string;
}

export function DiagramWidget({ title, description }: DiagramWidgetProps) {
  return (
    <Box sx={styles.root}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

const styles = {
  root: {
    p: 2,
    borderRadius: 2,
    border: '1px dashed var(--color-border-subtle)',
    background: 'color-mix(in srgb, var(--color-surface-raised) 56%, transparent)',
  },
} as const;
