import { Box, Breadcrumbs, Button, Chip, Link, Paper, Stack, TextField, Typography } from '@mui/material';
import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { AppShell } from '@/core/layout/app-shell';
import { DashboardLayout } from '@/core/layout/dashboard-layout';
import { DocumentationLayout } from '@/core/layout/documentation-layout';
import { PublicLayout } from '@/core/layout/public-layout';
import { StageLayout } from '@/core/layout/stage-layout';
import { AuthenticatedLayout } from '@/core/layout/authenticated-layout';
import { useDocumentationNavigation, useGlobalState, useTenant } from '@/core/providers';
import type { CSSProperties } from 'react';
import type { CoverageMap, DocumentationRoute, StageDocument, StageId } from '@/core/types/documentation';
import { documentationBlocks, documentationSections } from '@/core/documentation';
import { documentationMock } from '@/core/mock';
import { searchDocumentation } from '@/core/search';
import { motion } from '@/core/motion';
import { ptBr } from '@/core/i18n';
import { navigationRoutes } from '../routes';

const StagePanel = lazy(async () => {
  const module = await import('@/components/StagePanel');
  return { default: module.StagePanel };
});

const stageDocuments: StageDocument[] = [
  { stage: '00', title: 'Bootstrap e identidade', source: 'docs/00.md', view: 'full' },
  { stage: '01', title: 'Discovery e necessidade', source: 'docs/01.md', view: 'full' },
  { stage: '02', title: 'Pesquisa e benchmark', source: 'docs/02.md', view: 'full' },
  { stage: '03', title: 'Consolidação funcional', source: 'docs/03.md', view: 'structured' },
  { stage: '04', title: 'Domínio e DER', source: 'docs/04.md', view: 'structured' },
  { stage: '05', title: 'Rastreabilidade e navegação', source: 'docs/05.md', view: 'structured' },
];

const routes: DocumentationRoute[] = [
  { path: '/', label: 'Landing', mode: 'summary' },
  { path: '/app/dashboard', label: 'Dashboard', mode: 'structured' },
  { path: '/app/governance', label: 'Governança', mode: 'structured' },
];

const coverage: CoverageMap = {
  stages: ['00', '01', '02', '03', '04', '05'],
  mode: 'complete',
  status: 'ready',
};

export default function App() {
  const mainRef = useRef<HTMLElement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const tenant = useTenant();
  const navigation = useDocumentationNavigation();
  const global = useGlobalState();

  const selectedDocument = useMemo(
    () => stageDocuments.find((document) => document.stage === navigation.stage) ?? stageDocuments[0],
    [navigation.stage],
  );

  const summaryItems = [
    { label: 'Etapa', value: selectedDocument.stage },
    { label: 'Documento', value: selectedDocument.title },
    { label: 'Seção', value: navigation.sectionId },
    { label: 'Estado', value: global.state },
  ];

  const handleJumpToTop = () => {
    mainRef.current?.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const searchResults = searchDocumentation(searchQuery, {
    documents: stageDocuments,
    sections: documentationSections,
    blocks: documentationBlocks,
    routes: navigationRoutes,
  });

  const sidebar = (
    <Stack gap={1.5}>
      <Paper sx={styles.panel}>
        <Typography variant="caption">Etapas</Typography>
        <Stack gap={1} mt={1}>
          {stageDocuments.map((document) => (
            <Button
              key={document.stage}
              variant={document.stage === navigation.stage ? 'contained' : 'text'}
              onClick={() => navigation.setStage(document.stage)}
              sx={styles.stageButton}
            >
              <Stack alignItems="flex-start">
                <Typography variant="overline">{document.stage}</Typography>
                <Typography variant="body2">{document.title}</Typography>
              </Stack>
            </Button>
          ))}
        </Stack>
      </Paper>

      <Paper sx={styles.panel}>
        <Typography variant="caption">{ptBr.context.select.title}</Typography>
        <TextField
          fullWidth
          size="small"
          placeholder={ptBr.global.search}
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{ mt: 1 }}
        />
      </Paper>

      <Paper sx={styles.panel}>
        <Typography variant="caption">Sumário</Typography>
        <Stack gap={1} mt={1}>
          {summaryItems.map((item) => (
            <Box key={item.label} sx={styles.summaryRow}>
              <Typography variant="caption">{item.label}</Typography>
              <Typography variant="body2">{item.value}</Typography>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Stack>
  );

  const contextPanel = (
    <Stack gap={2}>
      <Paper sx={styles.panel}>
        <Typography variant="caption">Contexto ativo</Typography>
        <Typography variant="h6" mt={0.5}>{tenant.tenant}</Typography>
        <Typography variant="body2" color="text.secondary">
          {tenant.company} · {tenant.branch}
        </Typography>
      </Paper>
      <Paper sx={styles.panel}>
        <Typography variant="caption">Navegação</Typography>
        <Stack gap={1} mt={1}>
          {routes.map((route) => (
            <Box key={route.path} sx={styles.routeRow}>
              <code>{route.path}</code>
              <span>{route.label}</span>
            </Box>
          ))}
        </Stack>
      </Paper>
      <Paper sx={styles.panel}>
        <Typography variant="caption">Cobertura</Typography>
        <Typography variant="body2" mt={0.5}>{coverage.status}</Typography>
        <Stack direction="row" gap={1} mt={1} flexWrap="wrap">
          {coverage.stages.map((stage) => (
            <Chip key={stage} size="small" label={stage} />
          ))}
        </Stack>
        <Typography variant="caption" mt={1} display="block">
          Resultados: {searchResults.documents.length} documentos, {searchResults.sections.length} seções, {searchResults.blocks.length} blocos.
        </Typography>
      </Paper>
    </Stack>
  );

  return (
    <DocumentationLayout>
      <PublicLayout>
        <AuthenticatedLayout>
          <DashboardLayout>
            <AppShell sidebar={sidebar} contextPanel={contextPanel}>
              <Box component="section" sx={styles.page}>
                <Breadcrumbs aria-label="breadcrumb" sx={styles.breadcrumbs}>
                  <Link underline="hover" color="inherit" href="#stage-overview">
                    Overview
                  </Link>
                  <Typography color="text.secondary">Etapa {selectedDocument.stage}</Typography>
                  <Typography color="text.secondary">{selectedDocument.title}</Typography>
                </Breadcrumbs>

                <Paper id="stage-overview" sx={styles.hero}>
                  <Stack gap={1.5}>
                    <Typography variant="overline">System Forge</Typography>
                    <Typography variant="h3">Base documental modular</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Aplicação React preparada para ler, organizar e apresentar toda a documentação por etapa, com
                      carregamento progressivo e navegação acessível.
                    </Typography>
                    <Stack direction="row" gap={1} flexWrap="wrap">
                      <Chip label={`Modo: ${coverage.mode}`} />
                      <Chip label={`Estado: ${global.state}`} />
                      <Chip label={`Contexto: ${tenant.tenant}`} />
                      <Chip label={`Motion: ${motion.transitionDuration()}`} />
                    </Stack>
                  </Stack>
                  <Button onClick={handleJumpToTop} variant="outlined">
                    Voltar ao topo
                  </Button>
                </Paper>

                <Paper component="section" sx={styles.contentShell} aria-labelledby="document-content-title">
                  <Stack gap={2}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                      <Box>
                        <Typography id="document-content-title" variant="h4">
                          {selectedDocument.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {selectedDocument.source} · visão {selectedDocument.view}
                        </Typography>
                      </Box>
                      <Stack direction="row" gap={1}>
                        <Button size="small" variant="outlined" onClick={() => navigation.setStage('00')}>
                          Anterior
                        </Button>
                        <Button size="small" variant="outlined" onClick={() => navigation.setStage('05')}>
                          Próxima
                        </Button>
                      </Stack>
                    </Stack>

                    <Suspense fallback={<div style={styles.loading}>Carregando conteúdo documental...</div>}>
                      <StageLayout>
                        <StagePanel stage={navigation.stage} source={selectedDocument.source} title={selectedDocument.title} />
                      </StageLayout>
                    </Suspense>
                  </Stack>
                </Paper>

                <Paper sx={styles.routesPanel}>
                  <Typography variant="h5">Rotas planejadas</Typography>
                  <Stack gap={1.5} mt={2}>
                    {searchResults.routes.map((route) => (
                      <Box key={route.path} sx={styles.routeCard}>
                        <Typography variant="body2" className="doc-mono">{route.path}</Typography>
                        <Typography variant="body2">{route.label}</Typography>
                        <Typography variant="caption" color="text.secondary">{route.contentType}</Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>

                <Paper sx={styles.routesPanel}>
                  <Typography variant="h5">Blocos documentais pesquisados</Typography>
                  <Stack gap={1.5} mt={2}>
                    {searchResults.blocks.slice(0, 4).map((block) => (
                      <Box key={block.id} sx={styles.routeCard}>
                        <Typography variant="body2">{block.title}</Typography>
                        <Typography variant="caption" color="text.secondary">{block.summary}</Typography>
                      </Box>
                    ))}
                  </Stack>
                  <Typography variant="caption" mt={2} display="block">
                    {documentationMock.states.join(' · ')}
                  </Typography>
                </Paper>
              </Box>
            </AppShell>
          </DashboardLayout>
        </AuthenticatedLayout>
      </PublicLayout>
    </DocumentationLayout>
  );
}

const styles: Record<string, CSSProperties> = {
  page: {
    display: 'grid',
    gap: '20px',
  },
  breadcrumbs: {
    color: 'var(--color-text-secondary)',
  },
  hero: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '24px',
    alignItems: 'flex-start',
    padding: '24px',
  },
  contentShell: {
    padding: '24px',
  },
  loading: {
    padding: '24px',
    borderRadius: '12px',
    border: '1px dashed var(--color-border-subtle)',
  },
  routesPanel: {
    padding: '24px',
  },
  routeCard: {
    display: 'grid',
    gap: '4px',
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid var(--color-border-subtle)',
    background: 'color-mix(in srgb, var(--color-surface-raised) 72%, transparent)',
  },
  panel: {
    padding: '16px',
  },
  stageButton: {
    justifyContent: 'flex-start',
    textTransform: 'none',
  },
  summaryRow: {
    display: 'grid',
    gap: '2px',
    padding: '10px 0',
    borderBottom: '1px solid var(--color-border-subtle)',
  },
  routeRow: {
    display: 'grid',
    gap: '2px',
    padding: '10px 0',
    borderBottom: '1px solid var(--color-border-subtle)',
  },
};
