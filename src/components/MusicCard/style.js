import styled from 'styled-components';

export const Card = styled.div`
  border: 0.5px;
  height: 50px;
  border-style: solid none none none;
  border-color: ${(props) => props.theme.colors.secondary.background};;
  display: flex;
  grid-template-columns: auto auto auto auto;
  align-self: stretch;
  /* justify-content: space-around; */
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const TrackLabel = styled.p`
  color: white;
  text-align: center;
  width: 170px;
  height: 12px;
  margin-bottom: 5px;
  align-self: center;
  flex-grow: 0;

  font-style: normal;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
`;

export const Track = styled.audio`
  height: 30px;
  display: flex;
  flex-grow: 1;
  max-width: 1400px;
  color: ${(props) => props.theme.colors.primary.main};
`;
