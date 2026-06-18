import { Button, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { DocumentationBadge, DocumentationList, DocumentationTable, DocumentationTabs } from '@/core/components';
import { documentationSections } from '@/core/documentation';
import { DiagramWidget, DocumentWidget, StatusWidget, TimelineWidget } from '@/core/widgets';
import type { CSSProperties } from 'react';
import type { StageId } from '@/core/types/documentation';

interface StagePanelProps {
  stage: StageId;
  source: string;
  title: string;
}

export function StagePanel({ stage, source, title }: StagePanelProps) {
  const section = useMemo(() => documentationSections.find((item) => item.id === 'overview') ?? documentationSections[0], []);

  return (
    <Stack gap={3}>
      <header style={styles.header}>
        <Stack gap={1}>
          <Typography variant="overline">Etapa {stage}</Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {source}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} flexWrap="wrap">
          <DocumentationBadge label="full" tone="info" />
          <DocumentationBadge label="structured" tone="success" />
          <DocumentationBadge label="read-only" tone="default" />
        </Stack>
      </header>

      <DocumentationTabs
        value="overview"
        tabs={[
          { value: 'overview', label: 'Visão geral' },
          { value: 'source', label: 'Fonte' },
          { value: 'states', label: 'Estados' },
        ]}
        onChange={() => undefined}
      />

      <section style={styles.grid}>
        <DocumentWidget blocks={section.blocks} />
        <DocumentationTable
          title="Mapeamento rápido"
          rows={[
            { key: 'Etapa', value: stage },
            { key: 'Documento', value: title },
            { key: 'Origem', value: source },
            { key: 'Visão', value: 'full / structured' },
          ]}
        />
        <DocumentationList
          items={['Sumário lateral acessível', 'Breadcrumbs e âncoras', 'Texto completo preservado', 'Fallbacks explícitos']}
        />
        <TimelineWidget
          items={[
            { label: 'Entrada', detail: 'Contexto e navegação inicial' },
            { label: 'Leitura', detail: 'Exibição documental com fontes' },
            { label: 'Expansão', detail: 'Acesso progressivo a seções e widgets' },
          ]}
        />
        <DiagramWidget title="Estrutura" description="Etapa, documento, seção e conteúdo são tratados como unidades navegáveis." />
        <Stack direction="row" gap={1} flexWrap="wrap">
          <Button variant="outlined">Abrir fonte</Button>
          <Button variant="outlined">Ir para sumário</Button>
          <Button variant="contained">Expandir conteúdo</Button>
        </Stack>
      </section>
    </Stack>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    alignItems: 'flex-start',
  },
  grid: {
    display: 'grid',
    gap: '16px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
};
