import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    loading: false,
    name: '',
  };

  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = async () => {
    this.setState({ loading: true });
    const { name } = await getUser();
    this.setState({ name, loading: false });
  };

  render() {
    const { loading, name } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? <Loading /> : <p data-testid="header-user-name">{name}</p>}
        <nav>
          <li>
            <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          </li>
          <li>
            <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
          </li>
          <li>
            <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default Header;
