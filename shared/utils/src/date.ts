export const formatDate = (
  isoDateString: string,
  format: 'YYYY-MM-DD' | 'MMMM D, YYYY' = 'YYYY-MM-DD'
): string => {
  if (!isoDateString) return '';

  const dateObj = new Date(isoDateString);
  if (isNaN(dateObj.getTime())) return '';

  if (format === 'MMMM D, YYYY') {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return dateObj.toLocaleDateString('en-US', options);
  }

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
