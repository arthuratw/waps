import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

export const Input = styled.input`
  padding-left: 15px;
  background-color: transparent;
  width: 100%;
  height: 40px;
  border: solid 1px #fff;
  border-radius: 5px;
  cursor: auto;
  outline: 0;
  color: #fff;
`;

export const InputArea = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 10%;
    gap: 30px;
`;

export const Button = styled.button`
    height: 40px;
    width: 200px;
    background-color: #76AB72;
    border: none;
    color: ${props => props.theme.white};
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    :hover{
       background-color: #5F8A5C;
    }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
`;

export const Title = styled.text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  padding: 0px 5px;
`;