export function parseDate(date: string | undefined): string {
  if (date) {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const day = dateObj.getDate();
    return `${year}-${month}-${day}`;
  }
  return '';
}
