import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <div>
        <audio data-testid="audio-component" src={ url } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>

        <label htmlFor="favorita">
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
          />
        </label>
      </div>

    );
  }
}
MusicCard.propTypes = {
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
