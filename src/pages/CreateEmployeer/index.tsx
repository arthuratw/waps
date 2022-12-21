import FormEmployeer from "../../components/FormEmployeer"
import { EmployeerContainer, HeaderContainer, Title } from "./styles"

export default function CreateEmployeer(){
    return(
        <EmployeerContainer>
            <HeaderContainer>
                <Title>Cadastrar funcionário</Title>
            </HeaderContainer>
            <FormEmployeer/>
        </EmployeerContainer>
    )
}