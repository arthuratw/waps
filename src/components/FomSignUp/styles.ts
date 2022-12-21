import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 522px;
  height: 622px;
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 25px;
`
export const InputArea = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #B9BBBE;
  border-radius: 15px;
  background-color: transparent;
  width: auto;
  height: 55px;
  margin-bottom: 26px;
  padding-left: 15px;
`;

export const Input = styled.input`
  padding-left: 15px;
  background-color: transparent;
  width: 100%;
  height: 55px;
  border: none;
  cursor: auto;
  outline: 0;
  ::placeholder{
    color: ${props => props.theme.palceholder};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.blue};
  width: 300px;
  height: 45px;
  color: ${props => props.theme.white};
  border-radius: 5px;
  align-self: center;
  margin-top: 15px;
  border: none;
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.primary};
  }
`;


export const Title = styled.text`
  font-size: 30px;
  color: ${props => props.theme.blue};
  font-weight: bold;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const LoginTitle = styled.text`
  color: ${props => props.theme.palceholder};
  font-size: 16px;
  align-self: center;
  margin-top: 30px;
  font-weight: bold;
`;

export const NavigateLoginText = styled.a `
  color: ${props => props.theme.blue};
  text-decoration: none;
  :hover{
    color: ${props => props.theme.primary};
  }
`;

