import { useAuth } from '../../context/useAuth'
import { ButtonContainer } from './Button.styles'

interface ButtonProps{
  variant?: 'primary'
}

export function Button({ variant = 'primary'}: ButtonProps) {
  const auth = useAuth()
}
