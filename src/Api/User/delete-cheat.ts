import { API_CONFIG } from "../config";

export const deleteCheat = (cheatCodeId: string | undefined) => {
  console.log(cheatCodeId);

  return fetch(`${API_CONFIG.baseUrl}${cheatCodeId}/delete`, {
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
