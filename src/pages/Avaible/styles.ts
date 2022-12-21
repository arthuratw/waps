import styled from "styled-components";
import  logowapsescrita  from '../../assets/logo-escrita.svg'
import  logowaps  from '../../assets/logo.svg'

export const AvaibleContainer = styled.div`
    padding-top: 10%;
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
`;
export const Title = styled.text`
    font-weight: bold;
    font-size: 30px;
    color: ${props => props.theme.white};
`;

export const SubTitle = styled.text`
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.white};
`;

export const Label = styled.label`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 60%;
  
`;

export const SelectTitle = styled.text`
  color: #fff;
  font-size: 16px;
  font-weight: 300;
`;

export const Select = styled.select`
  height: 40px;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 16px;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.blue};
    border: none;
    width: 50%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    :hover{
        background-color: ${props => props.theme.blue};
        color: ${props => props.theme.white};
    }
    margin-top: 3%;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0px;
    right: 15px;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.div`
    height: 50px;
    width: 200px;
    display: flex;
    flex-direction: row;

`;

export const Logo = styled.div`
    height: 50px;
    width: 50px;
    background-image: url(${logowaps});
    background-size: cover;
    background-size: 100% 100%;
`;

export const LogoEscrita = styled.div`
    height: 50px;
    width: 150px;
    background-image: url(${logowapsescrita});
    background-size: cover;
    background-size: 100% 100%;
`;

export const LogoName = styled.text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
