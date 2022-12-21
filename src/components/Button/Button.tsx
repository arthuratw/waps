import { useAuth } from '../../context/useAuth'
import { ButtonContainer } from './Button.styles'

interface ButtonProps{
  variant?: 'primary'
}

export function Button({ variant = 'primary'}: ButtonProps) {
  const auth = useAuth()

  return <ButtonContainer variant={variant} onClick={() => auth.singUp('bryan@teste.com', '123456789')}>Criar conta</ButtonContainer>
}
