import { createGlobalStyle } from 'styled-components';
// import { lightTheme, darkTheme } from './assets/themes/default';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary.background};
    font-size: 16px;
    padding: 50px;
  }

  button {
    cursor: pointer;
  }
`;
