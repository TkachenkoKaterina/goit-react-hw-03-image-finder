import { Component } from 'react';
import { fetchGallery } from 'api';
// import { ErrorMessage } from './ErorrMessage';

const ERROR_MSG = 'Что-то пошло не так:( Друже, попробуй обновить страничку!';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: null });
      const fetchedGallery = await fetchGallery();
      this.setState({ gallery: fetchedGallery });
    } catch (error) {
      this.setState({ error: ERROR_MSG });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { gallery, isLoading } = this.state;
    // const options = breeds.map(breed => ({
    //   value: breed.id,
    //   label: breed.name,
    // }));

    return (
      <ul>
        {gallery.map(galleryImg => (
          <li>{galleryImg}</li>
        ))}
      </ul>
    );
  }
}

// {
//   error && <ErrorMessage>{error}</ErrorMessage>;
// }
