import React from 'react';
import { Layout } from '../Layout/Layout';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from '../ImageGallery/ImageGallery';

export const App = () => {
  return (
    <Layout>
      {/* <Searchbar /> */}
      <ImageGallery />
      {/* <Button /> */}
      <h1>Title</h1>

      <GlobalStyle />
    </Layout>
  );
};
