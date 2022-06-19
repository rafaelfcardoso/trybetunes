import React from 'react';
import PropTypes from 'prop-types';
// import FavIcon from '../../assets/images/redHeartIcon.svg';
import * as M from './style';

export default class MusicCard extends React.Component {
  render() {
    const { music, AddFavoriteSong, favorites } = this.props;
    return (
      <M.Card>
        <M.TrackContainer>
          <M.TrackLabel>
            {music.trackName}
          </M.TrackLabel>
          <M.ArtistLabel>
            {music.artistName}
          </M.ArtistLabel>
        </M.TrackContainer>
        <M.Track
          data-testid="audio-component"
          src={music.previewUrl}
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </M.Track>
        <M.Favorite
          name="favorite"
          id={`favorite-${music.trackId}`}
          value={music.trackId}
          type="checkbox"
          checked={favorites.some((s) => s.trackId === music.trackId)}
          onChange={AddFavoriteSong}
        />
      </M.Card>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
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
