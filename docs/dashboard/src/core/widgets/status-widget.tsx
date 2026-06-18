import { Chip, Stack } from '@mui/material';

interface StatusWidgetProps {
  statuses: string[];
}

export function StatusWidget({ statuses }: StatusWidgetProps) {
  return (
    <Stack direction="row" gap={1} flexWrap="wrap">
      {statuses.map((status) => (
        <Chip key={status} label={status} />
      ))}
    </Stack>
  );
}
