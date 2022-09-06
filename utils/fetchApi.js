import axios from 'axios';

export const baseUrl = process.env.NEXT_BAYUT_RAPIDAPI_URL;

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_BAYUT_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.NEXT_BAYUT_RAPIDAPI_HOST,
    },
  });

  return data;
};
