import styled, { ThemeConsumer } from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 74rem;
    height: calc(90vh - 5rem);
    margin: 2.5rem auto;
    padding: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const LeftNavBar = styled.div`
    background-color: ${props => props.theme.primary};
    width: 17rem;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: relative;
`;

export const Body = styled.div`
    background-color: ${props => props.theme.primary};
    width: 50rem;
    height: 100%;
    border-radius: 8px;
    padding: 5% 2%;
`;

export const LeftNavBarTitle = styled.text`
    font-size: 25px;
    font-weight: 300;
    color: ${props => props.theme.white};
    margin-bottom: 15px;
`;

export const LeftNavBarButtonContainer = styled.button`
    border: none;
    background-color: transparent;
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: 500;
    width: fit-content;
    height: fit-content;
    margin-left: 25px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        color: ${props => props.theme.palceholder};
    }
    cursor: pointer;
`;

export const LogoutContainer = styled.button`
    position: absolute;
    bottom: 0;
    border: none;
    background-color: transparent;
    color: ${props => props.theme.white};
    font-size: 18px;
    font-weight: 500;
    width: fit-content;
    height: fit-content;
    margin-left: 5px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        color: ${props => props.theme.palceholder};
    }
    cursor: pointer;
`;