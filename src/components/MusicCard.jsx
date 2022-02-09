/* import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { previewUrl, trackName } = this.props;
    return (
      <div>
        <div className="music-title">{trackName}</div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}
MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;

export default MusicCard; */

/* ------------------------------------------------------------------------------------- */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MusicCard extends Component {
  render() {
    const {
      previewUrl,
      trackName,
      trackId,
      onFavoriteChange,
      favorites,
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
        <label htmlFor={ `checkbox-${trackId}` } className="checkbox-container">
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name={ trackId }
            onClick={ onFavoriteChange }
            checked={ favorites.includes(trackId) }
          />
        </label>
      </div>

    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  favorites: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  onFavoriteChange: PropTypes.func.isRequired,
};

export default MusicCard;
