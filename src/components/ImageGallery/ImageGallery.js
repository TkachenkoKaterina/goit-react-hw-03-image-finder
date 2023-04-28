import React from 'react';
import { ImageGalleryItem } from '..//ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ gallery }) => {
  console.log(gallery);
  return (
    <ul className="gallery">
      {Array.isArray(gallery) &&
        gallery.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        ))}
    </ul>
  );
};
