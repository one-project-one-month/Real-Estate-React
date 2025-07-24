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

export const parsePriceRange = (
  label: string
): { minPrice?: number; maxPrice?: number } => {
  const million = 1_000_000;

  if (label.startsWith('Below')) {
    const max = parseInt(label.match(/\d+/)?.[0] || '0', 10) * million;
    return { maxPrice: max };
  }

  if (label.startsWith('Above')) {
    const min = parseInt(label.match(/\d+/)?.[0] || '0', 10) * million;
    return { minPrice: min };
  }

  const numbers = label.match(/\d+/g);
  if (numbers && numbers.length === 2) {
    return {
      minPrice: parseInt(numbers[0], 10) * million,
      maxPrice: parseInt(numbers[1], 10) * million,
    };
  }

  return {};
};
