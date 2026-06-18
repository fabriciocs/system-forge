import { Stack } from '@mui/material';
import { ModuleHeader } from './module-header';
import { ModuleTemplate } from './module-template';
import type { StageDocumentation } from '@/core/documentation/stage-documentation';

interface ModulePageProps {
  data: StageDocumentation;
}

export function ModulePage({ data }: ModulePageProps) {
  return (
    <Stack gap={3}>
      <ModuleHeader data={data} />
      <ModuleTemplate data={data} />
    </Stack>
  );
}
