import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const IPI_KEY = '32131085-77c33ae4af62fbdfe36accafe';

export const fetchGallery = async (searchValueInput, page) => {
  let url = `${baseUrl}?key=${IPI_KEY}&q=${searchValueInput}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;
  const response = await axios.get(url);
  return response.data.hits;
};
