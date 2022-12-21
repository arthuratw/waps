import { EmployeerContainer, EmployeerName } from "./styles";

interface EmployeerData {
    name?: string
    cpf?: string
    cargo?: string
    setor?: string
}

export function Employeer({name, cpf, cargo, setor}: EmployeerData) {
    return (
        <EmployeerContainer>
            <EmployeerName>{name}</EmployeerName>
            <EmployeerName>{cpf}</EmployeerName>
            <EmployeerName>{cargo}</EmployeerName>
            <EmployeerName>{setor}</EmployeerName>
        </EmployeerContainer>
    )
}