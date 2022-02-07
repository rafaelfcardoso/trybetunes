import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    artistName: '',
    isButtonDisabled: true,
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
    const { artistName, isButtonDisabled } = this.state;

    return (
      <main>
        <Header />
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
          >
            Pesquisar
          </button>
        </div>
      </main>
    );
  }
}

export default Search;
