export function formatCurrency(price: number, currency: string): string {
  let formatted: string;

  if (price >= 1_000_000_000) {
    formatted = `${(price / 1_000_000_000).toFixed(2)} Billion`;
  } else if (price >= 1_000_000) {
    formatted = `${(price / 1_000_000).toFixed(2)} Million`;
  } else if (price >= 1_000) {
    formatted = `${price.toLocaleString('en-US')}`;
  } else {
    formatted = price.toString();
  }

  return `${formatted} ${currency}`;
}
