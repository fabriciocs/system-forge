import { Stack, Typography } from '@mui/material';
import { DocumentationCard } from '@/core/components';
import type { ContentBlock } from '@/core/types/documentation';

interface DocumentWidgetProps {
  blocks: ContentBlock[];
}

export function DocumentWidget({ blocks }: DocumentWidgetProps) {
  return (
    <Stack gap={2}>
      {blocks.map((block) => (
        <DocumentationCard key={block.id} block={block} />
      ))}
      <Typography variant="caption" color="text.secondary">
        O conteúdo completo permanece acessível pela estrutura documental e pelos links de origem.
      </Typography>
    </Stack>
  );
}
