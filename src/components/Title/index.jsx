import React from 'react';
import PropTypes from 'prop-types';
import * as T from './style';

function Title({ title }) {
  return (
    <T.Title>
      <T.H1>
        {title}
      </T.H1>
    </T.Title>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
