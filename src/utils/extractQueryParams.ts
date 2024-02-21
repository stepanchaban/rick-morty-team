export function extractQueryParams(queryType: string): string {
  const query = window.location.hash.split('?')[1];
  const params = Object.fromEntries(new URLSearchParams(query));
  return params[queryType] || '';
}
