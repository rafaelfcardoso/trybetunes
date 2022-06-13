import styled from 'styled-components';
// import lightTheme from '../../assets/themes/default';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const Content = styled.div``;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  height: 70px;
  width: 450px;
  left: 50px;
  top: 600px;
  border-radius: 10px;
  position: absolute;
`;

export const NameInput = styled.input`
  height: 70px;
  width: 450px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.primary.highlight};
  background-color: transparent;

  position: absolute;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.highlight};
    font-size: 20px;
    margin-left: 25px;
    margin-top: 20px;
    position: absolute;
  }

`;

export const TextBtn = styled.p`
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  position: absolute;
  width: 83px;
  height: 34px;
  left: 190px;
  top: 15px;

`;

export const Name = styled.label`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  height: 70px;
  width: 450px;
  left: 50px;
  top: 490px;
  border-radius: 10px;
  position: absolute;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const Aside = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  width: 550px;
  height: 100vmax;
`;

export const Background = styled.div`
  width: 890px;
  left: 550px;
  top:0px;
  height: 100vmax;
  background-color: aqua;
  position: absolute;
`;

export const PC = styled.img`
  width: 1440px;
  height: 1020px;
`;

export const Logo = styled.img`
  background-color: ${(props) => props.theme.colors.primary.background};
  max-height: 200px;
  max-width: 250px;
  margin-left: 0px;
`;

export const TrybeTunes = styled.h1`
  position: absolute;
  width: 400px;
  height: 300px;
  left: 150px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  top: 60px;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 61px;
  color: white;
`;
