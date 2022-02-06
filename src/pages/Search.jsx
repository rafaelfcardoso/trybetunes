import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-search">Search</div>
      </main>
    );
  }
}

export default Search;
