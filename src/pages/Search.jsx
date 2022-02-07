import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

let ARTIST_INPUT = '';
class Search extends React.Component {
  state = {
    artistName: '',
    isButtonDisabled: true,
    loading: false,
    apiWasFetched: false,
    response: [],
  };

  searchArtist = async () => {
    const { artistName } = this.state;
    ARTIST_INPUT = artistName;
    this.setState({ loading: true });
    const response = await searchAlbumsAPI(artistName);
    this.setState({
      loading: false,
      artistName: '',
      response,
      apiWasFetched: true,
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ artistName: value }, () => this.handleButtonStatus());
  };

  handleButtonStatus = () => {
    const { artistName } = this.state;
    const MIN_CHAR = 2;
    if (artistName.length >= MIN_CHAR) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  render() {
    const { artistName, isButtonDisabled, loading, response, apiWasFetched } = this.state;

    return (
      <main>
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <div data-testid="page-search">
            <input
              data-testid="search-artist-input"
              type="text"
              value={ artistName }
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ isButtonDisabled }
              onClick={ this.searchArtist }
            >
              Pesquisar
            </button>
          </div>
        )}

        {(apiWasFetched && response.length > 0) && (
          <h3>{`Resultado de álbuns de: ${ARTIST_INPUT}`}</h3>)}

        {(apiWasFetched && response.length === 0) && (
          <p>Nenhum álbum foi encontrado</p>)}

        {response.map(({ collectionId, collectionName }) => (
          <li key={ collectionId }>
            <Link
              data-testid={ `link-to-album-${collectionId}` }
              to={ `/album/${collectionId}` }
              key={ collectionId }
            >
              { collectionName }
            </Link>
          </li>
        ))}
      </main>
    );
  }
}

export default Search;
