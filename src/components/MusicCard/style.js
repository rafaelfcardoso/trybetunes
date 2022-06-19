import styled from 'styled-components';

export const Card = styled.div`
  border: 0.5px;
  height: 70px;
  border-style: solid none none none;
  border-color: ${(props) => props.theme.colors.secondary.background};;
  display: flex;
  grid-template-columns: auto auto auto auto;
  align-self: stretch;
  /* justify-content: space-around; */
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
`;

export const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`;

export const TrackLabel = styled.p`
  color: white;
  text-align: left;
  width: 200px;
  height: 20px;
  margin-bottom: 5px;
  align-self: flex-start;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: 800;
  font-size: 15px;
`;

export const ArtistLabel = styled.p`
  color: white;
  text-align: left;
  width: 200px;
  height: 20px;
  margin-bottom: 5px;
  align-self: flex-start;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 10px;
  font-weight: normal;
`;

export const Track = styled.audio`
  height: 30px;
  display: flex;
  flex-grow: 1;
  max-width: 1000px;
  color: ${(props) => props.theme.colors.primary.main};
`;

export const Favorite = styled.input`
  min-width: 40px;
  margin-left: 20px;
`;

export const Icon = styled.img`
  height: 30px;
`;
