import { React, useState } from 'react';
// import ReactDOM from 'react-dom';

function Login() {
  const [profileName, setName] = useState('');
  const [isButtonDisabled, setStatus] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  /* const handleButtonStatus = () => {
    const MIN_CHAR = 3;
    if (profileName.length >= MIN_CHAR) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }; */

  const handleChange = (e) => {
    const MIN_CHAR = 2;
    setName(e.target.value);
    if (profileName.length >= MIN_CHAR) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  };

  return (
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
      />
    </form>
  );
}

// ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;
