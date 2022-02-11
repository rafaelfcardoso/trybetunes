import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends Component {
  state = {
    name: '',
    isButtonDisabled: true,
    loading: false,
    redirect: false,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value }, () => this.handleButtonStatus());
  };

  handleButtonStatus = () => {
    const { name } = this.state;
    const MIN_CHAR = 3;
    if (name.length >= MIN_CHAR) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  handleSubmit = () => {
    const { name } = this.state;
    this.setState(() => ({
      loading: true,
    }), () => createUser({ name }).then(() => {
      this.setState(() => ({ loading: false, redirect: true }));
    }));
  };

  render() {
    const { name, isButtonDisabled, loading, redirect } = this.state;

    return (
      <div data-testid="page-login">
        { redirect && (<Redirect to="/search" />) }
        {loading ? (
          <Loading />
        ) : (
          <form>
            <label htmlFor="login-name-input">
              Enter your name:
              <input
                type="text"
                data-testid="login-name-input"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ isButtonDisabled }
              onClick={ this.handleSubmit }
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
