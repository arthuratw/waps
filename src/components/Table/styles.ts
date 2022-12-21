import styled from "styled-components";

export const TableContainer = styled.table`
    height: 10%;
    width: 100%;
    padding: 5px 2px;
    border-collapse: collapse;
    color: ${props => props.theme.white};
    
`;

export const Tr = styled.tr`

`;

export const Th = styled.th`
 border-bottom: 1px solid #fff;
 padding: 10px 2px;
`;

export const Thead = styled.thead`
    font-size: 22px;
`;

export const Tbody = styled.tbody`
    font-size: 18px;
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 10px;
`;
