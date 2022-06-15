import styled from 'styled-components';

export const Content = styled.div`
/*   background-color: ${(props) => props.theme.colors.primary.main}; */
  display: flex;
  flex-direction: row;
  justify-content: center;


  align-items: center;

`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  margin-top: 100px;
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  /* align-items: stretch; */
`;

export const Album = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding-bottom: 10px;
`;

export const CoverContainer = styled.div`
  background-color: ${(props) => props.theme.colors.secondary.main};
  border-radius: 10px 10px 0px 0px;
  height:350px;
  padding: 40px;
  display: flex;
  justify-content: space-around;
`;

export const InfoContainer = styled.div`
  height:180px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-basis:60%;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.primary.lighter};
`;

export const Artwork = styled.img`
  border-radius: 10px;
  /* width: 220px;
  height: 220px; */
`;

export const Track = styled.div`
`;

export const ArtistDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  margin-top: 15px;
`;

export const CollectionName = styled.h1`
  font-size: 60px;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

`;

/* export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary.dark};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`; */
