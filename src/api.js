import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['key'] = '32131085-77c33ae4af62fbdfe36accafe';

export const fetchGallery = async () => {
  const response = await axios.get('forest');
  return response.data;
};

// export const fetchGallery = async breedId => {
//   const response = await axios.get('/images/search', {
//     params: {
//       breed_id: breedId,
//     },
//   });
//   return response.data[0];
// };
