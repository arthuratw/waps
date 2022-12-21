import { LoginContainer, LogoContainer, FormContainer, LogoText } from "./styles"
import logoescrita from '../../assets/logo-escrita.svg'
import { FormLogin } from '../../components/FormLogin'

export function Login() {
    return (
        <LoginContainer>
            <LogoContainer>
                <img src={logoescrita} alt="" />
                <LogoText>Soluções Administrativas {'\n'} Personalizadas</LogoText>
            </LogoContainer>
            <FormContainer>
                <FormLogin />
            </FormContainer>
        </LoginContainer>
    )
}