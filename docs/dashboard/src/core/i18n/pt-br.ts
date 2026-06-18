import messages from '../../../../i18n/pt-br.json';

export const ptBr: typeof messages = messages;

export function t(path: string): string {
  const segments = path.split('.');
  let current: unknown = messages;

  for (const segment of segments) {
    if (typeof current !== 'object' || current === null || !(segment in current)) {
      return path;
    }

    current = (current as Record<string, unknown>)[segment];
  }

  return typeof current === 'string' ? current : path;
}
