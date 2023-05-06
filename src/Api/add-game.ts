import { API_CONFIG } from './config';

export const addGame = (
  gameTitle: string,
  console: any,
  codeTitle: string,
  code: string
) => {
  const newCode = {
    gameTitle: gameTitle,
    consoleId: console,
    codeTitle: codeTitle,
    code: code
  };

  return fetch(API_CONFIG.baseUrl + `/users_CheatCodes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCode),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to Add Game');
    }
    return response.json();
  });
};
