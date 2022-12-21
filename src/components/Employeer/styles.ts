import styled from "styled-components";

export const EmployeerContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 0 2.5%;
`;

export const EmployeerName = styled.text`
    font-size: 20px;
    font-weight: 500;
    color: ${props => props.theme.white};
`;