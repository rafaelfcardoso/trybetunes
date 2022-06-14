import styled from 'styled-components';

export const Content = styled.div`
/*   background-color: ${(props) => props.theme.colors.primary.main}; */
  display: flex;
  flex-direction: row;
  justify-content: center;


  /* align-items: center; */

`;

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  width: 1600px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

export const Album = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 40px;

`;

export const CoverContainer = styled.div`
/* background-color: ${(props) => props.theme.colors.primary.main}; */
  height:350px;
  margin-bottom: 40px;
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

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  display: flex;
  background-color: ${(props) => props.theme.colors.primary.dark};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
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
