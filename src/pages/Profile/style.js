import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  height: 100vmax;
  margin-top: 100px;
  padding: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ProfileCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  border-radius: 20px 20px 20px 20px;
  padding: 50px;
  margin-top: 25px;
  height: 500px;
  margin-left: 200px;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
`;

export const Container = styled.div`
  background-color:${(props) => props.theme.colors.secondary.background};
  border-radius: 20px 20px 20px 20px;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  /* height: 100px; */
  justify-content: flex-start;
`;

export const PicContainer = styled.div`
/*   background-color: ${(props) => props.theme.colors.primary.lighter}; */
  padding: 50px;
  /* width: 350px; */
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  flex-direction: column;
`;

export const Picture = styled.img`
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  /* margin: auto; */
  /* margin-bottom: 50px; */
`;

export const EditButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 150px;
  height: 40px;
  /* margin: auto; */

  border:solid 1px;
  border-color: ${(props) => props.theme.colors.primary.lighter};
  border-width: 1px;
  border-radius: 5px;
  background-color: transparent;

  a {
      color: ${(props) => props.theme.colors.primary.lighter};
      font-weight: bold;
      text-decoration: none;
    }

  :hover {
    background-color: ${(props) => props.theme.colors.primary.highlight};
    border-color: ${(props) => props.theme.colors.primary.highlight};
    a {
      color: white;
    }
  }
`;

export const ProfileInfo = styled.p`
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 14px;
  margin-bottom: 20px;
  /* font-weight: bold; */
`;

export const Loader = styled.div`
  margin-top: 300px;
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
    border: 5px solid #9147cc;
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
