import React from 'react';
import { ImageGalleryItem } from '..//ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ gallery }) => {
  return (
    <GalleryList className="gallery">
      {Array.isArray(gallery) &&
        gallery.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        ))}
    </GalleryList>
  );
};
