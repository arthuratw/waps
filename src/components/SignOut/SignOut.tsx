import { useAuth } from '../../context/useAuth'
import { ButtonContainer } from './SignOut.styles'
import { auth } from '../../services/firebase'

interface ButtonProps{
  variant?: 'primary'
}

export function SignOut({ variant = 'primary'}: ButtonProps) {
  const authl = useAuth()

  return <ButtonContainer variant={variant} onClick={() => authl.singOut(auth)}>Sair</ButtonContainer>
}