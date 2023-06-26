import { LoginParams } from '../../Types';
import { API_CONFIG } from '../config';



// export const getUserFromServer = async ({username, password}: LoginParams) => {  
//   await fetch(`${API_CONFIG.baseUrl}user/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   })
//     .then((response) => {      
//       if (!response.ok) {
//         throw new Error('Request failed');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log({data});
//     })
//     .catch((error) => {
//       console.error(error);
//     })
// }


export const getUserFromServer = async ({ username, password }: LoginParams) => {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    console.log( data );

    return data; // Return the response JSON
  } catch (error) {
    console.error(error);
  }
};
