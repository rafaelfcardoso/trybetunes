import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../../services/userAPI';
import DefaultPicture from '../../assets/images/profile-logo.svg';

import Header from '../../components/Header';
import Title from '../../components/Title';

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
        <Title title="Perfil" />
        <C.Content>
          {
            loading
              ? <C.Loader />
              : (
                <C.ProfileCard>
                  <C.PicContainer>
                    {user.image ? <C.Picture src={user.image} alt="Avatar" /> : <C.Picture src={DefaultPicture} alt="Avatar" />}
                    <C.EditButtom>
                      <Link to="profile/edit">EDITAR PERFIL</Link>
                    </C.EditButtom>

                  </C.PicContainer>
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
              )
          }
        </C.Content>
      </div>
    );
  }
}
