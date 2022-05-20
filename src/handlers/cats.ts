export const getCats = (request: Request) => {
  const cats = ['Luna', 'Milo', 'Oliver', 'Leo', 'Loki'];
  return new Response(JSON.stringify(cats));
};
