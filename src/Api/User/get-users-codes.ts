import { API_CONFIG } from '../config';

export const getUsersCodes = (userId: number) =>
  fetch(`${API_CONFIG.baseUrl}codes/${userId}`).then((response) => {
    if (!response.ok) {
      throw new Error('Error finding user codes');
    }
    return response.json();
  });
