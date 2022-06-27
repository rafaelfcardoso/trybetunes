import styled from 'styled-components';

export const Footer = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary.main}; */
  background-color: #35364f;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  /* filter: blur(3px);
  -webkit-filter: blur(3px); */
  backdrop-filter: blur(3px);
  position: fixed;
  display: flex;
  /* justify-content: center; */
  width: 100vw;
  height: 70px;
  left: 200px;
  bottom: 0px;

  /* h1 {
    font-size: 45px;
    background: -webkit-linear-gradient(50deg, #7220e3 0%, #9147cc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: 30px;
    margin-left: 60px;
    align-self: flex-end;
    margin-bottom: 15px;

    font-style: normal;
    font-weight: bold;
    text-decoration: none;
  } */
`;

export const H1 = styled.h1`
  font-size: 45px;
  background: -webkit-linear-gradient(50deg, #7220e3 0%, #9147cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 30px;
  margin-left: 60px;
  align-self: flex-end;
  margin-bottom: 15px;

  font-style: normal;
  font-weight: bold;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  width: 600px;
`;

export const Logo = styled.img`
  fill: ${(props) => props.theme.colors.primary.highlight};
  height: 50px;
  width: 1400px;
  display: flex;
  justify-self: center;
  align-self: center;
`;
