export const deleteCheat = (cheatCodeId) => {
   console.log(cheatCodeId);
   

   return fetch(`http://localhost:3000/users_CheatCodes/${cheatCodeId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Update the UI to remove the deleted cheat code from the user's list of cheat codes.
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}