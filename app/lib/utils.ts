export const parseCurrencyToNumber = (value: any): number => {
  if (typeof value === 'number') return Math.abs(value);
  if (!value) return 0;

  const cleaned = value
    .toString()
    .replace(/[R$\s.]/g, '')
    .replace(',', '.');

  return Math.abs(parseFloat(cleaned)) || 0;
};