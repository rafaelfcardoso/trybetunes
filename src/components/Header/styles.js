import styled from 'styled-components';

export const Header = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  border: 0.5px solid ${(props) => props.theme.colors.secondary.background};
  /* background-color: transparent; */
  position: absolute;
  width: 100vw;
  height: 100px;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors.primary.lighter};
    width: 87px;
    height: 22px;
    margin-right: 30px;
    margin-left: 30px;
    align-self: center;

    font-style: normal;
    /* font-weight: 600; */
    text-decoration: none;
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 600px;
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const User = styled.p`
  color: white;
  width: 87px;
  text-align: right;
  height: 22px;
  margin-right: 30px;
  align-self: center;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export const Picture = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-self: center;
`;

export const Loader = styled.div`
  margin-top: 25px;
  margin-right: 25px;
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
