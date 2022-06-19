import React from 'react';
import { Link } from 'react-router-dom';
import * as H from './styles';
import { getUser } from '../../services/userAPI';
import DefaultPicture from '../../assets/images/profile-logo.svg';
// import Logo from '../../assets/images/Glyph_Color@2x.png';
// import Logo from '../../assets/images/Glyph_White.svg';
import Logo from '../../assets/images/icons8-apple-music-64.svg';
// import Logo from '../../assets/images/icons8-vaporwave-64.png';

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
      <>
        <H.BrandContainer>
          <H.Logo src={Logo} alt="Avatar" />
          <H.Trybetunes>Trybetunes</H.Trybetunes>
        </H.BrandContainer>
        <H.Header data-testid="header-component">
          {user
            ? (
              <H.UserContainer>
                {user.image ? <H.Picture src={user.image} alt="Avatar" /> : <H.Picture src={DefaultPicture} alt="Avatar" />}
                <H.User data-testid="header-user-name">{user.name}</H.User>
              </H.UserContainer>
            ) : <H.Loader />}
          <H.Container>
            <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
            <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
            <Link to="/profile" data-testid="link-to-profile">Meu Perfil</Link>
          </H.Container>
        </H.Header>
      </>
    );
  }
}
