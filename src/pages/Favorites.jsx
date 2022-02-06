import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-favorites">Favoritos</div>
      </main>
    );
  }
}

export default Favorites;
