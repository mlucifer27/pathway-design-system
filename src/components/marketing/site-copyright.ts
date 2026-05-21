/** Footer line — current calendar year at render time (server or client). */
export function formatSiteCopyright(brand: string): string {
  const year = new Date().getFullYear();
  return `© ${year} ${brand} · All Rights Reserved`;
}
