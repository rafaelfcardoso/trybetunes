import { React, useState } from 'react';
// import ReactDOM from 'react-dom';

function Login() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={ handleSubmit } data-testid="page-login">
      <label htmlFor="login-name-input">
        Enter your name:
        <input
          type="text"
          data-testid="login-name-input"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </label>
      <input type="Submit" data-testid="login-submit-button" />
    </form>
  );
}

// ReactDOM.render(<Login />, document.getElementById('root'));
export default Login;
