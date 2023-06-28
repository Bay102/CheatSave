import { RegisterParams } from '../../Types';
import { API_CONFIG } from '../config';

export const register = async ({ username, password }: RegisterParams) => {
  await fetch(`${API_CONFIG.baseUrl}user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Username Already Exists');
    }
    return response.json();
  });
};
