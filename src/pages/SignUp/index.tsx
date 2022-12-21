import { SignUpContainer, LogoContainer, FormContainer, LogoText } from "./styles"
import logoescrita from '../../assets/logo-escrita.svg'
import { FormSignUp } from '../../components/FomSignUp'

export function SignUp(){
    return (
        <SignUpContainer>
            <LogoContainer>
                <img src={logoescrita} alt="" />
                <LogoText>Soluções Administrativas {'\n'} Personalizadas</LogoText>
            </LogoContainer>
            <FormContainer>
                <FormSignUp />
            </FormContainer>
        </SignUpContainer>
    )
}