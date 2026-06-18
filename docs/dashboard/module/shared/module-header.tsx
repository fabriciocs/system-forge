import { Paper, Stack, Typography } from '@mui/material';
import type { StageDocumentation } from '@/core/documentation/stage-documentation';

interface ModuleHeaderProps {
  data: StageDocumentation;
}

export function ModuleHeader({ data }: ModuleHeaderProps) {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack gap={1}>
        <Typography variant="overline">Etapa {data.stage}</Typography>
        <Typography variant="h3">{data.title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {data.objective}
        </Typography>
      </Stack>
    </Paper>
  );
}
