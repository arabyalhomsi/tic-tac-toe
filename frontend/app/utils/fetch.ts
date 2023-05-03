const API = 'http://localhost:3000';

export const getData = async (url: string): Promise<Response> => {
  const response = await fetch(`${API}${url}`);

  if (response.status !== 200) {
    throw new Error('Request is not successful.');
  }

  return response;
};

export const postData = async (
  url: string,
  payload: unknown
): Promise<Response> => {
  const response = await fetch(`${API}${url}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.status !== 200) {
    throw new Error('Request is not successful.');
  }

  return response;
};
