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
    color: ${(props) => props.theme.colors.primary.dark};
    width: 87px;
    height: 40px;
    margin-right: 30px;
    margin-left: 60px;
    align-self: flex-end;

    font-style: normal;
    font-weight: bold;
    text-decoration: none;
    font-size: 38px;
    line-height: 22px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 600px;
`;
