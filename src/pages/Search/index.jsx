import React from 'react';
import { Link } from 'react-router-dom';

import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Header from '../../components/Header';
import * as S from './style';

export default class Search extends React.Component {
  state = {
    loading: false,
    artistFormName: '',
    artistName: '',
    artistAlbum: [],
    hasAlbum: true,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { artistFormName } = this.state;

    this.setState(
      {
        loading: true,
        artistFormName: '',
        artistName: artistFormName,
      },
      async () => {
        const album = await searchAlbumsAPI(artistFormName);
        const foundAlbum = album.length > 0;

        this.setState({
          loading: false,
          artistAlbum: album,
          hasAlbum: foundAlbum,
        });
      },
    );
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 2;
    const { artistFormName } = this.state;

    return artistFormName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const {
      artistFormName,
      loading,
      artistAlbum,
      artistName,
      hasAlbum,
    } = this.state;

    return (
      <div>
        <Header />
        <S.Container>
          <S.SearchFrom>
            <S.Name htmlFor="search-artist-input">
              <S.NameInput
                id="search-artist-input"
                type="text"
                placeholder="Nome do Artista"
                name="artistFormName"
                value={artistFormName}
                data-testid="search-artist-input"
                onChange={this.handleChangeForm}
              />
            </S.Name>
            <S.Button
              type="submit"
              data-testid="search-artist-button"
              disabled={!this.buttonDisabled()}
              onClick={this.onButtonClick}
            >
              <S.TextBtn>Pesquisar</S.TextBtn>
            </S.Button>
          </S.SearchFrom>

          { loading
            ? <p>Carregando...</p>
            : (
              <>
                {artistAlbum.length > 0 && (
                  <S.Content>
                    <S.ResultH2>
                      Resultado de álbuns de:
                      {' "'}
                      {artistName}
                      {'". '}
                    </S.ResultH2>
                    <S.AlbumContainer>
                      { artistAlbum.map(({
                        collectionId,
                        collectionName,
                        artworkUrl100,
                        /* artistName, */
                      }) => (
                        <S.Album>
                          <S.Images
                            src={artworkUrl100}
                            alt={collectionName}
                          />
                          <Link
                            to={`/album/${collectionId}`}
                            key={collectionId}
                            data-testid={`link-to-album-${collectionId}`}
                          >
                            {collectionName}
                          </Link>
                        </S.Album>
                      ))}
                    </S.AlbumContainer>
                  </S.Content>
                )}
                <div>
                  { hasAlbum ? null : <p>Nenhum álbum foi encontrado</p> }
                </div>
              </>
            )}
        </S.Container>
      </div>
    );
  }
}
