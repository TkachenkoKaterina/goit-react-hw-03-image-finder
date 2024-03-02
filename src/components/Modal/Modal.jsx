import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  instance = null;

  componentDidMount() {
    this.showLightbox();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.largeImageURL !== this.props.largeImageURL ||
      prevProps.tags !== this.props.tags
    ) {
      this.closeLightbox();
      this.showLightbox();
    }
  }

  componentWillUnmount() {
    this.closeLightbox();
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  showLightbox = () => {
    const { largeImageURL, tags, onClose } = this.props;

    const handleOverlayClick = event => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };

    this.instance = basicLightbox.create(`
      <div onClick=${handleOverlayClick}>
        <div>
          <img src=${largeImageURL} alt=${tags} />
        </div>
      </div>
    `);

    this.instance.show();
  };

  closeLightbox = () => {
    if (this.instance) {
      this.instance.close();
    }
  };

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return null;
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
