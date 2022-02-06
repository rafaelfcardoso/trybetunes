import React from 'react';
import Header from '../components/Header';

class ProfileEdit extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <div data-testid="page-profile-edit">Editar perfil</div>
      </main>
    );
  }
}

export default ProfileEdit;
