const host = 'http://localhost:8080/api';
const url = (path) => `${host}/${path}`;
const header = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const get = async (path) => {
  const response = await fetch(url(path));
  const result = await response.json();

  return result;
};

export const post = async (path, body) => {
  const options = { ...header, method: 'POST', body: JSON.stringify(body) };
  const response = await fetch(url(path), options);
  const result = await response.json();

  return result;
};
