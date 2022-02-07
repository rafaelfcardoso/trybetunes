import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    artistName: '',
    collectionName: '',
    artworkUrl100: '',
    songsList: [],
  };

  componentDidMount() {
    this.requestMusic();
  }

  requestMusic = async () => {
    const { id } = this.props;
    const responseAPI = await getMusics(id);
    console.log(responseAPI);
    const { artistName, collectionName, artworkUrl100 } = responseAPI[0];
    this.setState({
      artistName,
      collectionName,
      artworkUrl100,
      songsList: responseAPI.slice(1),
    });
  };

  /**
   * Consultei o seguinte repositorio para entender a logica da renderizacao da lista de musicas com o .map():
   * https://github.com/tryber/sd-018-a-project-trybetunes/pull/57/commits/2fbf4d8625a6d85cf9303788898e23c664e92045
   */

  render() {
    const { artistName, collectionName, artworkUrl100, songsList } = this.state;
    return (
      <main>
        <Header />
        <div data-testid="page-album">
          <p data-testid="artist-name">{artistName}</p>
          <p data-testid="album-name">{collectionName}</p>
          <img src={ artworkUrl100 } alt={ collectionName } />

          {songsList.map(({ trackName, trackId, previewUrl }) => (
            <div key={ trackId }>
              <span>{trackName}</span>
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
