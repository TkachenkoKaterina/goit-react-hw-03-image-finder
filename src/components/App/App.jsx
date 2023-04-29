import React, { Component } from 'react';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from '../GlobalStyle';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchGallery } from '../../api';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

export class App extends Component {
  state = {
    gallery: [],
    search: '',
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    this.handleSearch('');
  }

  handleSearch = async searchValue => {
    this.setState({ search: searchValue, page: 1, isLoading: true });
    const gallery = await fetchGallery(searchValue, 1);
    this.setState({
      gallery,
      isLoading: false,
    });
  };

  handleLoadMore = async () => {
    const { gallery, search, page } = this.state;
    const nextPage = page + 1;
    this.setState({ isLoading: true });
    const newGallery = await fetchGallery(search, nextPage);
    this.setState({
      gallery: gallery.concat(newGallery),
      page: nextPage,
      isLoading: false,
    });
  };

  render() {
    const { gallery, page, isLoading } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        {isLoading && <Loader />}
        {!isLoading && gallery.length > 0 && <ImageGallery gallery={gallery} />}
        {!isLoading && gallery.length >= 12 && (
          <Button
            onClick={() => this.handleLoadMore()}
            page={page}
            isLoading={isLoading}
          />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
