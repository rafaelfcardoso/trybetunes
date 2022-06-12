import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const Content = styled.div``;

export const Button = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  height: 70px;
  width: 450px;
  left: 50px;
  top: 600px;
  border-radius: 10px;
  position: absolute;
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
  left: 190px;
  top: 15px;

`;

export const Name = styled.input`
  stroke: rgba(255, 255, 255, 0.4);
  background-color: transparent;
  height: 70px;
  width: 450px;
  left: 50px;
  top: 490px;
  border-radius: 10px;
  position: absolute;

  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
`;

export const Aside = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  width: 550px;
  height: 100vmax;
`;

export const TrybeTunes = styled.h1`
  position: absolute;
  width: 291px;
  height: 61px;
  left: 130px;
  top: 130px;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  color: white;
`;

export const Input = styled.input`
`;
