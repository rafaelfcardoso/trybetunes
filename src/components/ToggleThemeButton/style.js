import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: solid 2px;
  border-color: ${(props) => props.theme.colors.secondary.highlight};
  height: 60px;
  width: 350px;
  /* margin-left: 270px; */
  border-radius: 5px;
  color: white;

  display: flex;
  /* align-self: center; */
  justify-self: center;
  justify-content: center;
  align-items: center;

  transition: transform .2s;

  p {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;

    width: 83px;
    height: 34px;
    left: 190px;
    top: 15px;
  }

  :disabled {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary.lighter};
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.secondary.background};
  }

  :enabled {
    color: white;
    background: linear-gradient(50deg, #7220e3 45%, #9147cc 100%);
    border: none;
      :hover {
        transform: scale(1.1);
    }
  }

`;

export default Button;
