export const getUsersCodes = (userId: number) =>
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
        throw new Error('Error Finding Codes');
      }

      return codes;
    });
