import { API_CONFIG } from "./config";

export const getConsoles = () => {
  return fetch(`${API_CONFIG.baseUrl}consoles`).then((response) => {
    if (!response.ok) {
      throw new Error('Error Retrieving Consoles');
    }
    return response.json();
  });
};