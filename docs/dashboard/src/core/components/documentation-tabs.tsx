import { Tab, Tabs } from '@mui/material';

interface DocumentationTabsProps {
  value: string;
  tabs: { value: string; label: string }[];
  onChange: (value: string) => void;
}

export function DocumentationTabs({ value, tabs, onChange }: DocumentationTabsProps) {
  return (
    <Tabs value={value} onChange={(_, nextValue) => onChange(nextValue)} variant="scrollable" scrollButtons="auto">
      {tabs.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </Tabs>
  );
}
