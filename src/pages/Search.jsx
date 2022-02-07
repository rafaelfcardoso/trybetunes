import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

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
    valueSearched = artistName;
    this.setState({ loading: true });
    const response = await searchAlbumsAPI(artistName);
    searchAlbumsAPI(this.artistName);
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
              onClick={ searchArtist }
            >
              Pesquisar
            </button>
          </div>
        )}
        {(apiWasFetched && response.length > 0) && (
          <p>{`Resultado de álbuns de: ${valueSearched}`}</p>
        )}

      </main>
    );
  }
}

export default Search;
