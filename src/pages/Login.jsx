import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

// import ReactDOM from 'react-dom';

class Login extends Component {
  state = {
    profileName: '',
    isButtonDisabled: true,
    loading: false,
    redirect: false,
  };

  handleSubmit = async () => {
    const { profileName } = this.state;
    this.setState({ loading: true });
    await createUser(profileName);
    this.setState({ loading: false, redirect: true });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ profileName: value }, () => this.handleButtonStatus());
  };

  handleButtonStatus = () => {
    const { profileName } = this.state;
    const MIN_CHAR = 2;
    if (profileName.length >= MIN_CHAR) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  };

  render() {
    const { profileName, isButtonDisabled, loading, redirect } = this.state;

    return (
      <div data-testid="page-login">
        { redirect && (<Redirect to="/search" />) }
        {loading === true ? (
          <Loading />
        ) : (
          <form onSubmit={ handleSubmit } data-testid="page-login">
            <label htmlFor="login-name-input">
              Enter your name:
              <input
                type="text"
                data-testid="login-name-input"
                value={ profileName }
                onChange={ handleChange }
              />
            </label>
            <input
              type="submit"
              data-testid="login-submit-button"
              disabled={ isButtonDisabled }
              onClick={ handleSubmit }
            />
          </form>
        )}
      </div>
    );
  }
}

// ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;
