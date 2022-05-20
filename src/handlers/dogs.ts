export const getDogs = (request: Request) => {
  const dogs = ['Milo', 'Ollie', 'Lucky', 'Ozzy', 'Odin'];
  return new Response(JSON.stringify(dogs));
};
