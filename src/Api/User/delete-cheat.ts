export const deleteCheat = (cheatCodeId: string | undefined) => {
  console.log(cheatCodeId);

  return fetch(`http://localhost:3000/users_CheatCodes/${cheatCodeId}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
