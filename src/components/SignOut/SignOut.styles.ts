import styled from 'styled-components'

export type ButtonVariant = 'primary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  `