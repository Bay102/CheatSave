export const getConsoles = () => {
  return fetch('http://localhost:3000/consoles').then((response) => {
    if (!response.ok) {
      throw new Error('Error Retrieving Consoles');
    }
    return response.json();
  });
};
