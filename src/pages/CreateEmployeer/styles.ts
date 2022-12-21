import styled from "styled-components";

export const EmployeerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #476E7C;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.text`
    color: ${props => props.theme.white};
    font-size: 30px;
    font-weight: bold;
    align-self: center;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
`;