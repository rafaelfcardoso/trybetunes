import React from 'react';
import PropTypes from 'prop-types';

import { getUser, updateUser } from '../../services/userAPI';
import Header from '../../components/Header';
// mport Picture from '../../assets/images/profile-logo.svg';
import * as C from './style';

export default class ProfileEdit extends React.Component {
  state = {
    loading: true,
    user: {
      name: '',
      description: '',
      email: '',
      image: '',
    },
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  handleChangeForm = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  isButtonDisabled = () => {
    const VALIDADE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const { user } = this.state;

    const hasEmail = VALIDADE_EMAIL.test(String(user.email).toLowerCase());
    const notEmpty = (user.name !== ''
      && user.description !== ''
      && user.image !== '');

    return hasEmail && notEmpty;
  };

  isSubmitted = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    this.setState(
      { loading: true },
      async () => {
        await updateUser(user);
        this.setState(
          { loading: false },
          () => history.push('/profile'),
        );
      },
    );
  };

  render() {
    const { loading, user } = this.state;

    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          loading
            ? <p>Carregando...</p>
            : (
              <C.Content>
                <C.EditProfileCard>
                  <C.ContainerForm>
                    <C.ContainerLabel>
                      <C.NameField
                        id="edit-input-name"
                        type="text"
                        name="name"
                        data-testid="edit-input-name"
                        value={user.name}
                        onChange={this.handleChangeForm}
                      />
                    </C.ContainerLabel>

                    <C.ContainerLabel>
                      <C.DescriptionField
                        id="edit-input-description"
                        type="text"
                        name="description"
                        placeholder="Descrição"
                        data-testid="edit-input-description"
                        value={user.description}
                        onChange={this.handleChangeForm}
                      />
                    </C.ContainerLabel>

                    <C.ContainerLabel>
                      <C.StandardField
                        id="edit-input-email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        data-testid="edit-input-email"
                        value={user.email}
                        onChange={this.handleChangeForm}
                      />
                    </C.ContainerLabel>

                    <C.ContainerLabel>
                      <C.StandardField
                        id="edit-input-image"
                        type="text"
                        placeholder="Imagem"
                        name="image"
                        data-testid="edit-input-image"
                        value={user.image}
                        onChange={this.handleChangeForm}
                      />
                    </C.ContainerLabel>

                    <C.SaveButtom
                      type="submit"
                      data-testid="edit-button-save"
                      disabled={!this.isButtonDisabled()}
                      onClick={this.isSubmitted}
                    >
                      SALVAR
                    </C.SaveButtom>
                  </C.ContainerForm>
                </C.EditProfileCard>

              </C.Content>
            )
        }
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
