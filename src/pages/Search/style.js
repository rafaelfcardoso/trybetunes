import styled from 'styled-components';
// import lightTheme from '../../assets/themes/default';

export const Search = styled.div`
  /* background-color: red; */
  display: flex;
  height: 100vmax;
  width: 100%;
`;

export const SearchContainer = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary.main}; */
  position: absolute;
  margin-left: 200px;
  padding: 15px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  display: flex;
`;

export const SearchForm = styled.form`
  /* background-color: ${(props) => props.theme.colors.primary.highlight}; */
  display: flex;
  margin-left: 15px;
  align-items: flex-start;
  justify-content: center;
  width: 550px;
`;

export const Container = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary.lighter}; */
  background-color: red;
  display: flex;
  margin-left: 200px;
  margin-top: 220px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: solid 1px;
  border-color: ${(props) => props.theme.colors.secondary.background};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 40px;
  margin-top: 1px;
  border-radius: 10px;

  :hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
    border-color: ${(props) => props.theme.colors.primary.dark};
  }
`;

export const NameInput = styled.input`
  color: ${(props) => props.theme.colors.primary.lighter};
  border: none;
  height: 40px;
  width: 400px;
  padding-left: 20px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.colors.secondary.background};

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
    font-size: 12px;
    margin-left: 0px;
    margin-top: 14px;
    position: absolute;
  }

  :onclick {
    border: none;
  }

`;

export const TextBtn = styled.p`
  color: white;
  display: flex;
  align-self: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;

`;

export const Name = styled.label`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  width: 590px;
  height: 70px;
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const Content = styled.div`
  /* background-color: ${(props) => props.theme.colors.primary.highlight}; */
  margin-top: 100px;
  display: flex;
  align-self: stretch;
  position: absolute;
  margin-top: -50px;
  flex-direction: column;
  min-height: 540px;
`;

export const ResultH2 = styled.h2`
  align-self: stretch;
  margin-left: 60px;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 20px;
  line-height: 10px;
`;

export const Images = styled.img`
  /* margin-left: 30px; */
  border-radius: 10px;
  width: 125px;
  height: 125px;
`;

export const AlbumContainer = styled.div`
  /* background-color: yellow; */
  top:80px;
  padding: 50px;

  display: flex;
  align-self: stretch;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;
`;

export const Album = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  /* border: none; */
  border-radius: 10px;
  width: 175px;
  height: 250px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  justify-content: space-around;

  text-align: center;

  a {
    color: ${(props) => props.theme.colors.primary.lighter};
    max-width: 250px;
    margin-left: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
  }

`;

export const Loader = styled.div`
  width: 100%;
  height: 4.8px;
  display: inline-block;
  margin-top: -150px;
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;

  ::after {
  content: '';
  width: 192px;
  height: 4.8px;
  background: ${(props) => props.theme.colors.secondary.highlight};
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
  }

  @keyframes animloader {
    0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
  }
`;
