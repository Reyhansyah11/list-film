const BASE_URL = process.env.REACT_APP_BASEURL;
const API_KEY = process.env.REACT_APP_APIKEY;
const TOKEN = process.env.REACT_APP_TOKEN;

export const fetchMovies = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  return data;
};
