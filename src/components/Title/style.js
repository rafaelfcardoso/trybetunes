import styled from 'styled-components';

export const Title = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  /* border-bottom: 0.5px solid ${(props) => props.theme.colors.secondary.background}; */
  position: absolute;
  display: flex;
  width: 100vw;
  height: 150px;
  left: 200px;
  top: 0px;

  h1 {
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
  }
`;

export const Container = styled.div`
  display: flex;
  width: 600px;
`;
