import React from 'react';
import PropTypes from 'prop-types';

import * as M from './style';

export default class MusicCard extends React.Component {
  render() {
    const { music, AddFavoriteSong, favorites } = this.props;
    return (
      <M.Card>
        <M.TrackName>
          {music.trackName}
        </M.TrackName>
        <audio
          data-testid="audio-component"
          src={music.previewUrl}
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor={`favorite-${music.trackId}`}
          data-testid={`checkbox-music-${music.trackId}`}
        >
          Favorita
          {' '}
          <input
            name="favorite"
            id={`favorite-${music.trackId}`}
            value={music.trackId}
            type="checkbox"
            checked={favorites.some((s) => s.trackId === music.trackId)}
            onChange={AddFavoriteSong}
          />
        </label>
      </M.Card>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  AddFavoriteSong: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      trackName: PropTypes.string.isRequired,
      previewUrl: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
