import React, { Component } from 'react';
import Mensagem from '../pages/Mensagem';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    loading: false,
    profileName: '',
  };

  render() {
    const { loading, profileName } = this.state;
    return (
      <header data-testid="header-component">
      </header>
    );
  }
}

export default Header;
