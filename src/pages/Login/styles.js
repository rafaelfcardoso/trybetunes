import styled from 'styled-components';
// import lightTheme from '../../assets/themes/default';

export const DivLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  margin: auto;
  height: 80vh;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  flex-direction: row;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary.background};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

export const Aside = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: 20px 0px 0px 20px;
  min-width: 500px;
  padding: 25px;
  /* width: 550px; */
  /* height: 80vh; */
  align-self: stretch;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Aside2 = styled.div`
  background-color: ${(props) => props.theme.colors.primary.highlight};
  border-radius: 0px 20px 20px 0px;
  /* height: 80vh; */
  display: block;
  align-self: stretch;
  align-items: stretch;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  height: 300px;
`;

export const Logo = styled.img`
  background-color: transparent;
  max-height: 200px;
  max-width: 250px;
  /* margin-left: 0px; */
`;

export const TrybeTunes = styled.h1`
  /* width: 400px; */
  /* top: 60px; */
  height: 300px;
  left: 130px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 61px;
  color: white;
`;

export const PC = styled.img`
  align-self: stretch;
  border-radius: 0px 20px 20px 0px;
  max-height: 80vh;
  /* width: 1440px;
  height: 1020px; */
`;

export const Content = styled.div``;

export const LoginInput = styled.input`
  height: 60px;
  width: 400px;
  margin-left: 0px;
  margin-bottom: 20px;
  display: flex;
  padding: 20px;

  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 20px;

  border-color: ${(props) => props.theme.colors.primary.lighter};
  border: 1px solid;
  border-radius: 5px;
  background-color: transparent;


  /* :hover {
    border-color: ${(props) => props.theme.colors.primary.dark};
    background-color: transparent;
  } */

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
    display: flex;
    align-self: center;
    justify-self: center;
    align-items: center;
    font-size: 18px;
    position: absolute;
  }

`;

export const LoginLabel = styled.label`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  height: 220px;
  margin-bottom: 25px;
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: solid 2px;
  border-color: ${(props) => props.theme.colors.primary.highlight};
  height: 60px;
  width: 350px;
  left: 70px;
  border-radius: 5px;
  color: white;
  /* border: none; */

  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;

    /* position: absolute; */
    width: 83px;
    height: 34px;
    left: 190px;
    top: 15px;

  }

  :disabled {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primary.lighter};
    border: solid 2px;
    border-color: ${(props) => props.theme.colors.primary.lighter};
  }

  :enabled {
    color: ${(props) => props.theme.colors.primary.highlight};
      :hover {
      color: white;
      background-color: ${(props) => props.theme.colors.primary.highlight};
      border: solid 2px;
      border-color: ${(props) => props.theme.colors.primary.highlight};
    }
  }

`;

export const TextBtn = styled.p`
  color: white;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  /* position: absolute; */
  width: 83px;
  height: 34px;
  left: 190px;
  top: 15px;

`;

export const Loader = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;

  ::before,

  ::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite ;
  }

  ::after {
    inset: 8px;
    transform: rotate3d(90, 90, 0, 180deg );
    border-color: ${(props) => props.theme.colors.secondary.background};
  }

  @keyframes rotate {
    0%   {transform: rotate(0deg)}
    100%   {transform: rotate(360deg)}
  }

  @keyframes prixClipFix {
    0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
    50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
    75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
  }

`;
