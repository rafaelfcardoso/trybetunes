import React from 'react';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    artistName: '',
    collectionName: '',
    artworkUrl100: '',
    songs: [],
  };

  componentDidMount() {
    this.requestMusic();
  }

  requestMusic = async () => {
    const { id } = this.props;
    const responseAPI = await getMusics(id);
    const { artistName, collectionName, artworkUrl100 } = responseAPI[0];
    this.setState({
      artistName,
      collectionName,
      artworkUrl100,
      songs: responseAPI.slice(1),
    });
  };

  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-album">
          <p data-testid="artist-name">{artistName}</p>
          <p data-testid="album-name">{collectionName}</p>
          <img src={ artworkUrl100 } alt={ collectionName } />

          {songs.map(({ songName, songId, previewUrl }) => (
            <div key={ songId }>
              <span>{songName}</span>
              <MusicCard url={ previewUrl } />
            </div>
          ))}
        </div>
      </main>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Album;
