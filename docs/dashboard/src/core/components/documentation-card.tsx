import { Paper, Stack, Typography } from '@mui/material';
import type { ContentBlock } from '@/core/types/documentation';

interface DocumentationCardProps {
  block: ContentBlock;
}

export function DocumentationCard({ block }: DocumentationCardProps) {
  return (
    <Paper sx={styles.card}>
      <Stack gap={1}>
        <Typography variant="overline">{block.kind}</Typography>
        <Typography variant="h6">{block.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {block.summary}
        </Typography>
        <Typography variant="caption" className="doc-mono">
          {block.source}
        </Typography>
      </Stack>
    </Paper>
  );
}

const styles = {
  card: { p: 2, height: '100%' },
} as const;
