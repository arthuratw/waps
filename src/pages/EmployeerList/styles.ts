import styled from "styled-components";

export const EmployeerListContainer = styled.div`
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

export const AddEmployeer = styled.button`
    height: 40px;
    width: 150px;
    background-color: #76AB72;
    border: none;
    color: ${props => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 15px;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    :hover{
       background-color: #5F8A5C;
    }
`;

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

