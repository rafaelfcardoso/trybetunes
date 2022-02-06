import React from 'react';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-profile">Perfil</div>
      </main>
    );
  }
}

export default Profile;
