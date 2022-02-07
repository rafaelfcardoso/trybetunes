import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    artistName: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ artistName: value }, () => this.handleButtonStatus());
  };

  render() {
    const { artistName } = this.state;

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
          Pesquisar
        </div>
      </main>
    );
  }
}

export default Search;
