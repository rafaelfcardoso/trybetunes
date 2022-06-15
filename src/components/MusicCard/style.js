import styled from 'styled-components';

export const Card = styled.div`
  border: 0.5px;
  border-style: solid none none none;
  border-color: ${(props) => props.theme.colors.secondary.background};;
  display: grid;
  grid-template-columns: auto auto auto;
  align-self: stretch;
  justify-content: space-around;
  align-items: center;
`;

export const TrackName = styled.p`
  color: white;
  text-align: center;
  width: 500px;
  height: 16px;
  margin-right: 30px;
  align-self: center;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
`;
