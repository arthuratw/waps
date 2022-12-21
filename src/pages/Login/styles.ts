import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 50%;
    
`;
export const FormContainer = styled.div`
    max-width: 50%;
`;

export const LogoText = styled.text`
    font-size: 30px;
    color: ${props => props.theme.blue};
    font-weight: bold;
    text-align: center;
`;