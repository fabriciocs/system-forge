import { Chip } from '@mui/material';

interface DocumentationBadgeProps {
  label: string;
  tone?: 'default' | 'info' | 'success' | 'warning' | 'error';
}

export function DocumentationBadge({ label, tone = 'default' }: DocumentationBadgeProps) {
  return <Chip label={label} color={tone === 'default' ? undefined : tone} size="small" />;
}
