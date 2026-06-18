import { Box, Paper, Stack, Typography } from '@mui/material';
import { DocumentationBadge, DocumentationList, DocumentationTable } from '@/core/components';
import { DiagramWidget, DocumentWidget, StatusWidget, TimelineWidget } from '@/core/widgets';
import type { StageDocumentation } from '@/core/documentation/stage-documentation';

interface ModuleTemplateProps {
  data: StageDocumentation;
}

export function ModuleTemplate({ data }: ModuleTemplateProps) {
  return (
    <Stack gap={3}>
      <Paper sx={{ p: 3 }}>
        <Stack gap={1.5}>
          <Typography variant="overline">Etapa {data.stage}</Typography>
          <Typography variant="h4">{data.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {data.objective}
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            <DocumentationBadge label={data.status} tone="success" />
            <DocumentationBadge label={data.stage} tone="info" />
          </Stack>
        </Stack>
      </Paper>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        <DocumentationTable
          title="Entrada e saída"
          rows={[
            { key: 'Entrada', value: data.input.join(' · ') },
            { key: 'Saída', value: data.output.join(' · ') },
            { key: 'Arquivo', value: data.files.join(' · ') },
          ]}
        />
        <DocumentationList items={data.criteria} />
        <TimelineWidget items={data.actions.map((action, index) => ({ label: action, detail: `Ação ${index + 1}` }))} />
        <DiagramWidget title="Diagrama" description={data.diagrams.join(' · ')} />
      </Box>

      <DocumentWidget blocks={data.dataBlocks} />

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6">Fontes</Typography>
        <Stack gap={1} mt={1}>
          {data.sources.map((source) => (
            <Typography key={source.path} variant="body2" className="doc-mono">
              {source.label} · {source.path}
            </Typography>
          ))}
        </Stack>
      </Paper>

      <StatusWidget statuses={data.states} />
    </Stack>
  );
}
