import { API_CONFIG } from '../config';

type RegisterFetchParams = {
  username: string;
  password: string;
};

export const registerFetch = ({ username, password }: RegisterFetchParams) => {
return fetch(API_CONFIG.baseUrl + '/Users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('registration failed');
    }    
    return response.json();
  });
};

