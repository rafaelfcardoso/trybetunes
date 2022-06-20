import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../../services/userAPI';

import * as L from './styles';
import Retro from '../../assets/images/retro-pc.jpg';
import Logo from '../../assets/images/icons8-apple-music-64.svg';

export default class Login extends React.Component {
  state = {
    formName: '',
    loading: false,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { formName } = this.state;
    const { history } = this.props;

    this.setState(
      { loading: true },
      () => createUser({ name: formName })
        .then(() => history.push('search')),
    );
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 3;
    const { formName } = this.state;

    return formName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const { formName, loading } = this.state;

    return loading ? (
      <L.DivLoading>
        <L.Loader />
      </L.DivLoading>
    ) : (
      <L.Background>
        <L.Container>
          <L.Aside>
            <L.LogoContainer>
              <L.Logo
                src={Logo}
                alt="Logo"
              />
              <L.TrybeTunes>
                TRYBE TUNES
              </L.TrybeTunes>
            </L.LogoContainer>
            <form>
              <L.LoginLabel>
                <L.LoginInput
                  name="formName"
                  id="login-submit-button"
                  placeholder="Seu Nome"
                  type="text"
                  data-testid="login-name-input"
                  value={formName}
                  onChange={this.handleChangeForm}
                />
                <L.Button
                  type="submit"
                  data-testid="login-submit-button"
                  onClick={this.onButtonClick}
                  disabled={!this.buttonDisabled()}
                >
                  <p>Entrar</p>
                </L.Button>
              </L.LoginLabel>
            </form>
          </L.Aside>
          <L.Aside2>
            <L.PC
              src={Retro}
              alt="Retro PC"
            />
          </L.Aside2>
        </L.Container>
      </L.Background>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
