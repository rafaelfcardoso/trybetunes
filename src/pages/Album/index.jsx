import React from 'react';
import PropTypes from 'prop-types';

import MusicCard from '../../components/MusicCard';
import getMusics from '../../services/musicsAPI';
import Header from '../../components/Header';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../../services/favoriteSongsAPI';

import * as A from './style';

export default class Album extends React.Component {
  state = {
    musicList: [],
    favoriteSongs: [],
    album: {},
    loading: true,
    loadingFavorites: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;

    const request = await getMusics(id);
    // const favorites = await getFavoriteSongs();
    const album = request[0];
    const musicList = request.filter((item) => item.kind === 'song');

    getFavoriteSongs().then((favoriteSongs) => this.setState({
      favoriteSongs,
      loadingFavorites: false,
    }));

    this.setMusics(musicList, album);
  }

  setFavoriteSongs = (favoriteSongs) => {
    this.setState({
      favoriteSongs,
      loadingFavorites: false,
    });
  };

  setMusics = (musicList, album) => {
    this.setState({
      musicList,
      album,
      loading: false,
    });
  };

  AddFavoriteSong = async ({ target: { value, checked } }) => {
    const { musicList } = this.state;

    const song = musicList.find((music) => music.trackId === parseInt(value, 10));

    const updateFunction = checked ? addSong : removeSong;
    this.setState({
      loadingFavorites: true,
    });
    updateFunction(song)
      .then(() => getFavoriteSongs())
      .then((favoriteSongs) => this.setFavoriteSongs(favoriteSongs));
  };

  render() {
    const {
      loading, musicList, album, favoriteSongs, loadingFavorites,
    } = this.state;
    return (
      <A.Content>
        <Header />
        <A.Container>
          { loading || loadingFavorites
            ? <p>Carregando...</p>
            : (
              <A.Album>
                <div className="title-content">
                  {album && (
                    <A.CoverContainer>
                      <A.Artwork
                        src={album.artworkUrl100}
                        alt={album.collectionName}
                      />
                      <A.InfoContainer>
                        <p>Album</p>
                        <A.CollectionName>
                          {album.collectionName}
                        </A.CollectionName>
                        <A.ArtistDiv>
                          <h3>
                            {album.artistName}
                          </h3>
                        </A.ArtistDiv>
                      </A.InfoContainer>
                    </A.CoverContainer>
                  )}
                </div>
                <div className="playlist">
                  {musicList.map((music) => (
                    <MusicCard
                      key={music.trackId}
                      music={music}
                      AddFavoriteSong={this.AddFavoriteSong}
                      favorites={favoriteSongs}
                    />
                  ))}
                </div>
              </A.Album>
            )}
        </A.Container>
      </A.Content>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
