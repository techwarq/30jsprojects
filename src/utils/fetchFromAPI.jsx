import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
 
 
  params: {
    
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'c150758dedmsh4be83ab97db08e5p1b152ajsn6ef8f5232bcf',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};