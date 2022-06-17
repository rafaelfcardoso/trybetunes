import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/userAPI';
import Header from '../../components/Header';
// import Picture from '../../assets/images/profile-logo.svg';

import * as C from './style';

export default class Profile extends React.Component {
  state = {
    loading: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading
            ? <p>Carregando...</p>
            : (
              <C.Content>
                <C.ProfileCard>
                  <C.Container>
                    <span>
                      <C.Picture src={user.image} alt="Avatar" />
                      <C.EditButtom>
                        <Link to="profile/edit">EDITAR PERFIL</Link>
                      </C.EditButtom>
                    </span>
                  </C.Container>
                  <C.Container>
                    <C.ProfileInfo>
                      Nome:
                      {' '}
                      <span>{user.name}</span>
                    </C.ProfileInfo>
                    <C.ProfileInfo>
                      Descrição:
                      {' '}
                      <span>{user.description}</span>
                    </C.ProfileInfo>
                    <C.ProfileInfo>
                      Email:
                      {' '}
                      <span>{user.email}</span>
                    </C.ProfileInfo>
                  </C.Container>
                </C.ProfileCard>

              </C.Content>
            )
        }
      </div>
    );
  }
}
