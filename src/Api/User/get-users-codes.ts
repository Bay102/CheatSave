export const getUsersCodes = (userId: any) =>
  fetch('http://localhost:3000/users_CheatCodes')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error finding user');
      }
      return response.json();
    })

    .then((codes) => codes.filter((code: any) => code.userId === userId))
    .then((codes) => {
      console.log(codes);
      if (!codes) {
        throw new Error('no user found');
      }

      return codes;
    });
