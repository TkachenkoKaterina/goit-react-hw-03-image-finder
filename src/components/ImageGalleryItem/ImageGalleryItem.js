import React from 'react';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <GalleryItem className="gallery-item">
      <Img src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
