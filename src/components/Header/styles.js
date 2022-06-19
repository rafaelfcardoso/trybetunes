import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  /* background-color: transparent; */
  position: absolute;
  padding: 30px;
  width: 200px;
  height: 100vmax;
  left: 0px;
  top: 100px;
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: flex-start;

  a {
    color: ${(props) => props.theme.colors.primary.lighter};
    font-style: normal;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const BrandContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border: solid 1px;
  border-color: ${(props) => props.theme.colors.secondary.background};
  margin-top: 0px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  height: 100px;
  width: 200px;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Trybetunes = styled.p`
  color: ${(props) => props.theme.colors.primary.lighter};
  text-align: right;
  height: 18px;
  margin-left: 0px;
  align-self: center;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export const UserContainer = styled.div`
  /* background-color: maroon; */
  margin-bottom: 30px;
  display: flex;
  height: 50px;
  width: 120px;
`;

export const User = styled.p`
  color: white;
  text-align: right;
  height: 22px;
  margin-left: 20px;
  align-self: center;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export const Container = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 120px;
  height: 100px;
`;

export const Picture = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-self: center;
`;

export const Logo = styled.img`
  fill: ${(props) => props.theme.colors.primary.highlight};
  height: 50px;
  width: 60px;
  display: flex;
  align-self: center;
`;

export const Loader = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
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
