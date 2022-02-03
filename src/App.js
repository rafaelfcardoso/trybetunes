import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <BrowserRouter>
          <Route exact path="/" component={ Login } />
        </BrowserRouter>
      </div>);
  }
}

export default App;
