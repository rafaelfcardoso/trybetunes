import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

class Header extends Component {
  state = {
    loading: false,
    userName: '',
  };

  componentDidMount() {
    this.getInfoUser();
  }

  getInfoUser = async () => {
    this.setState({ loading: true });
    const { userName } = await getUser();
    this.setState({ userName, loading: false });
  };

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? <Loading /> : <p data-testid="header-user-name">{userName}</p>}
      </header>
    );
  }
}

export default Header;
