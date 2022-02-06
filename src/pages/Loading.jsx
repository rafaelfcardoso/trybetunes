/* import React from 'react';
import propTypes from 'prop-types';

class Loading extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      loading && <div className="loading">Carregando...</div>
    );
  }
}
Loading.propTypes = {
  loading: propTypes.bool.isRequired,
};
export default Loading; */

import React from 'react';

const Loading = () => (
  <div className="loading">
    <p>Carregando...</p>
  </div>
);

export default Loading;
