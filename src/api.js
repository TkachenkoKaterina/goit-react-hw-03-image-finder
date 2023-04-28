import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const IPI_KEY = '32131085-77c33ae4af62fbdfe36accafe';

export const fetchGallery = async (searchValueInput, prevSearchValue) => {
  console.log(searchValueInput);
  console.log(prevSearchValue);
  let url = `${baseUrl}?key=${IPI_KEY}&q=${searchValueInput}&image_type=photo&orientation=horizontal&per_page=12`;
  if (searchValueInput !== prevSearchValue) {
    url += '&page=1';
  }
  const response = await axios.get(url);
  console.log(response);
  console.log(response.data);
  return response.data.hits;
};
