import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const {
      data: { trackId, trackName, previewUrl },
      data,
      handleFavorite,
      checked,
    } = this.props;

    return (
      <div>
        <h3>{trackName}</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name={ trackId }
            onChange={ () => handleFavorite(data) }
            checked={ checked }
          />
        </label>
      </div>

    );
  }
}

const { string } = PropTypes;

MusicCard.propTypes = {
  trackId: string,
  trackName: string,
  previewUrl: string,
}.isRequired;

export default MusicCard;
