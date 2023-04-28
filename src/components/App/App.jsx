// import axios from 'axios';
import React, { Component } from 'react';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from '../GlobalStyle';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { fetchGallery } from '../../api';

export class App extends Component {
  state = {
    gallery: [],
    search: '',
  };

  handleSearch = async searchValue => {
    console.log(searchValue);
    this.setState({ search: searchValue });
    const gallery = await fetchGallery(searchValue, this.state.search);
    this.setState({ gallery });
  };

  componentDidMount() {
    this.handleSearch('');
  }

  render() {
    const { gallery } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery gallery={gallery} />
        <GlobalStyle />
      </Layout>
    );
  }
}
