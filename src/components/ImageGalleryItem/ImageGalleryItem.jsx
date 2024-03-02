import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
