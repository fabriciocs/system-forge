import { List, ListItem, ListItemText, Paper } from '@mui/material';

interface DocumentationListProps {
  items: string[];
}

export function DocumentationList({ items }: DocumentationListProps) {
  return (
    <Paper sx={{ p: 2 }}>
      <List dense>
        {items.map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
