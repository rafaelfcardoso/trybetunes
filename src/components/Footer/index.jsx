import React from 'react';
import * as T from './style';
import player from '../../assets/images/Selection_003.png';

function Footer() {
  return (
    <T.Footer>
      <T.Logo src={player} alt="Avatar" />
    </T.Footer>
  );
}

export default Footer;
