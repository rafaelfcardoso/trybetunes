import styled from 'styled-components';
// import lightTheme from '../../assets/themes/default';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary.dark};
  height: 100vmax;
  top: 100px;
  width: 100vmax;
  position: absolute;
`;

export const SearchFrom = styled.form`
  background-color: ${(props) => props.theme.colors.primary.dark};
  height: 150px;
`;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  position: absolute;
  width: 270px;
  height: 70px;
  left: 895px;
  top: 50px;
  border-radius: 10px;
`;

export const NameInput = styled.input`
  height: 70px;
  width: 590px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary.lighter};
  background-color: transparent;

  position: absolute;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
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
  left: 70px;
  top: 16px;

`;

export const Name = styled.label`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  position: absolute;
  width: 590px;
  height: 70px;
  left: 275px;
  top: 50px;
  border-radius: 10px;
  border: 2px solid rgba(63, 61, 86, 0.6);

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const ResultH2 = styled.h2`
  position: absolute;
  width: 522px;
  height: 38px;
  left: 0px;
  top: 0px;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary.highlight};
  position: absolute;
  top:160px;

  left:200px;
  min-height: 540px;
  display: flex;
`;

export const Images = styled.img`
  margin-left: 40px;
  border-radius: 10px;
  width: 220px;
  height: 220px;
`;

export const AlbumContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top:80px;

  width: 1300px;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: auto auto auto auto;
  justify-content: space-between;
`;

export const Album = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  border-radius: 10px;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primary.lighter};
    max-width: 200px;
    margin-left: 50px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }

`;
