import React from 'react';
import Header from '../components/Header';

class Album extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-album">Album</div>
      </main>
    );
  }
}

export default Album;
