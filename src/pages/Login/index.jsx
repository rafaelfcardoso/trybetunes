import React from 'react';
import PropTypes from 'prop-types';
import Retro from '../../assets/images/retro-pc.jpg';
import Logo from '../../assets/images/Glyph_Color@2x.png';
import { createUser } from '../../services/userAPI';
import * as L from './styles';

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
      <p>Carregando...</p>
    ) : (
      <L.Container>
        <L.TrybeTunes>
          <L.Logo
            src={Logo}
            alt="Logo"
          />
          TRYBE TUNES
        </L.TrybeTunes>
        <L.Aside>
          <form>
            <L.Name>
              <L.NameInput
                name="formName"
                id="login-submit-button"
                placeholder="Seu Nome"
                type="text"
                data-testid="login-name-input"
                value={formName}
                onChange={this.handleChangeForm}
              />
            </L.Name>
            <L.Button
              type="submit"
              data-testid="login-submit-button"
              onClick={this.onButtonClick}
              disabled={!this.buttonDisabled()}
            >
              <L.TextBtn>Entrar</L.TextBtn>
            </L.Button>
          </form>
        </L.Aside>
        <L.Background>
          <L.PC
            src={Retro}
            alt="Retro PC"
          />
        </L.Background>
      </L.Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
