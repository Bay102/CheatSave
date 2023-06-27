import { API_CONFIG } from './config';

export const addCode = async (
  userId: number,
  gameTitle: string,
  consoleName: string,
  codeTitle: string,
  code: string,
  authToken: string
) => {
  const newCode = {
    userId,
    gameTitle,
    consoleName,
    codeTitle,
    code,
  };

  try {
    const response = await fetch(`${API_CONFIG.baseUrl}user/newcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(newCode),
    });
    if (!response.ok) {
      throw new Error('Request failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
