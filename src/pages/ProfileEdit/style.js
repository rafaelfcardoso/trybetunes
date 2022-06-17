import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.primary.background};
  margin-top: 100px;
  display: flex;
  padding: 50px;
  flex-direction: row;
  justify-content: space-around;
`;

export const EditProfileCard = styled.div`
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: 20px 20px 20px 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

`;

export const ContainerLabel = styled.label`
  background-color: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.primary.lighter};
  font-weight: bold;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Picture = styled.img`
  height: 200px;
  width: 200px;
  align-self: center;
  color: red;
  display: flex;
`;

export const NameField = styled.input`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 50px;
  font-weight: bold;
  height: 60px;
`;

export const DescriptionField = styled.input`
  background-color: ${(props) => props.theme.colors.secondary.background};
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 12px;
  height: 120px;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
    font-size: 12px;
    margin-left: 15px;
    margin-top: 8px;
    position: absolute;
  }
`;

export const StandardField = styled.input`
  background-color: ${(props) => props.theme.colors.secondary.background};
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.colors.primary.lighter};
  font-size: 12px;
  height: 30px;

  ::placeholder {
    color: ${(props) => props.theme.colors.primary.lighter};
    font-size: 12px;
    margin-left: 15px;
    margin-top: 8px;
    position: absolute;
  }
`;

export const SaveButtom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin: auto;

  color: ${(props) => props.theme.colors.primary.highlight};
    font-weight: bold;
    text-decoration: none;

  border:solid 1px;
  border-color: ${(props) => props.theme.colors.primary.highlight};
  border-width: 1px;
  border-radius: 5px;
  background-color: transparent;

  :hover {
    background-color: ${(props) => props.theme.colors.primary.highlight};
    color: white;
  }
`;
