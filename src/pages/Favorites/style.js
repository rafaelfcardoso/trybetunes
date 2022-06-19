import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  /* background-color: aliceblue; */
  height: 100vmax;
  margin-top: 150px;
  margin-left: 200px;
  padding: 50px;
  justify-content: flex-start;
  align-items: stretch;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border-bottom: 1px;
  display: flex;
  border-radius: 10px 10px 10px 10px;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: stretch;
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
