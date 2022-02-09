import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    collectionName: '',
    artistName: '',
    artworkUrl100: '',
    tracks: [],
    favorites: [],
    loading: false,
  }

  componentDidMount= async () => {
    const { match: { params: { id } } } = this.props;
    const tracks = await getMusics(id);
    const { artistName, collectionName, artworkUrl100 } = tracks[0];
    this.setState({ artistName, collectionName, artworkUrl100, tracks: tracks.slice(1) });
  }

  handleFavorite = async (song) => {
    const { favorites } = this.state;
    this.setState({ loading: true });
    await addSong(song);
    this.setState({
      loading: false,
      favorites: [...favorites, song.trackId],
    });
  }

  render() {
    const {
      collectionName,
      artistName,
      artworkUrl100,
      tracks,
      favorites,
      loading } = this.state;
    return (
      <div>
        <Header />
        { loading ? <Loading /> : (
          <div>
            <div data-testid="page-album">Album</div>
            <div>
              <h3 data-testid="album-name">{collectionName}</h3>
              <p data-testid="artist-name">{artistName}</p>
              <img src={ artworkUrl100 } alt={ collectionName } />
            </div>
            <div>
              { tracks.map((song) => (
                <MusicCard
                  key={ song.trackId }
                  onFavoriteChange={ () => this.handleFavorite(song) }
                  favorites={ favorites }
                  { ...song }
                />))}
            </div>
          </div>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
