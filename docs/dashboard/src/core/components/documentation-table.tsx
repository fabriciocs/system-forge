import { Box } from '@mui/material';

interface TableRow {
  key: string;
  value: string;
}

interface DocumentationTableProps {
  title: string;
  rows: TableRow[];
}

export function DocumentationTable({ title, rows }: DocumentationTableProps) {
  return (
    <Box className="doc-panel" sx={styles.root}>
      <h3>{title}</h3>
      <table className="doc-table">
        <thead>
          <tr>
            <th>Chave</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              <td>{row.key}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
}

const styles = {
  root: { overflow: 'hidden', p: 2 },
} as const;
