import { Box, Stack, Typography } from '@mui/material';

interface TimelineWidgetProps {
  items: { label: string; detail: string }[];
}

export function TimelineWidget({ items }: TimelineWidgetProps) {
  return (
    <Stack gap={1.5}>
      {items.map((item, index) => (
        <Box key={item.label} sx={styles.item}>
          <Typography variant="overline">{String(index + 1).padStart(2, '0')}</Typography>
          <Typography variant="body2">{item.label}</Typography>
          <Typography variant="caption" color="text.secondary">
            {item.detail}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

const styles = {
  item: { p: 2, borderRadius: 2, border: '1px solid var(--color-border-subtle)' },
} as const;
