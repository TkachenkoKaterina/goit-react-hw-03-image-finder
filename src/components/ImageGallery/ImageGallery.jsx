import { Searchbar } from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import { getImagesApi } from '../../api/api';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

export class ImageGallery extends Component {
  state = {
    searchTextValue: '',
    page: 1,
    images: [],
    showBtn: false,
    loader: false,
  };

  componentDidMount() {
    this.fetchImages();
  }

  componentDidUpdate(_, prevState) {
    const { searchTextValue, page } = this.state;
    if (
      prevState.searchTextValue !== searchTextValue ||
      prevState.page !== page
    ) {
      this.setState({ loader: true }, () => {
        this.fetchImages().finally(() => {
          this.setState({ loader: false });
        });
      });
    }
  }

  fetchImages = async () => {
    const { searchTextValue, page } = this.state;
    try {
      const { totalHits, hits } = await getImagesApi(searchTextValue, page);
      const newImages = page === 1 ? hits : [...this.state.images, ...hits];

      this.setState({
        images: newImages,
        showBtn: page < Math.ceil(totalHits / 10),
      });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  handleSubmit = searchText => {
    this.setState({ searchTextValue: searchText, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, loader } = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
        {loader && <Loader />}
        {images.length > 0 && (
          <ul className="gallery">
            {images.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={webformatURL}
              />
            ))}
          </ul>
        )}
        {showBtn && <Button onClick={this.handleLoadMore} />}
      </>
    );
  }
}
