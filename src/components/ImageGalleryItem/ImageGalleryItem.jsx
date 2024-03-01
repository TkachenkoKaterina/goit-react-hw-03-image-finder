import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, tags }) {
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};
