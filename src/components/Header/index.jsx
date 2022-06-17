import React from 'react';
import { Link } from 'react-router-dom';
import * as H from './styles';
import { getUser } from '../../services/userAPI';

export default class Header extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const user = await getUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <H.Header data-testid="header-component">
        <H.Container>
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
          <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
        </H.Container>
        {user
          ? (
            <H.UserContainer>
              <H.Picture src={user.image} alt="Avatar" />
              <H.User data-testid="header-user-name">{user.name}</H.User>
            </H.UserContainer>
          ) : <p>Carregando...</p>}

      </H.Header>
    );
  }
}
