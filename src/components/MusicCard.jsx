import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <audio data-testid="audio-component" src={ url } controls>
        <track kind="captions" />
        O seu navegador não suporta o elemento
        <code>audio</code>
        .
      </audio>
    );
  }
}
MusicCard.propTypes = {
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
