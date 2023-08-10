export const normalizeQuery = (data: string) => (
  data.toLowerCase().replace(' ', '-')
);
