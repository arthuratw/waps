import { useAuth } from '../../context/useAuth'
import { FormContainer, Input, Button, Title, InputArea, NavigateSignUpText, SignUpTitle } from './styles'
import { EnvelopeSimple, Lock } from 'phosphor-react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';




export function FormLogin() {
  const auth = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Email inválido").required("Informe um email"),
        password: Yup.string().min(6, 'A senha deve possuir entre 6 e 20 caracteres').max(20, 'A senha deve possuir entre 6 e 20 caracteres').required()
      })
      await schema.validate({ email, password })
      await auth.singIn(email, password).then(() => {
        navigate("/home")
      })

    } catch (error) {

      if (error instanceof Yup.ValidationError) {
        alert("Email ou senha invalido")
      }
    }
  }
  return (

    <FormContainer>
      
      <Title>Login</Title>

      <InputArea>
        <EnvelopeSimple size={24} color='#B9BBBE' />
        <Input
          type='text'
          placeholder='Usúario'
          onChange={e => setEmail(e.target.value)}

        />
      </InputArea>

      <InputArea>
        <Lock size={24} color='#B9BBBE' />
        <Input
          type="password"
          placeholder='Senha'
          onChange={e => setPassword(e.target.value)}
        />
      </InputArea>

      <Button onClick={handleSubmit}>{auth.loadingAuth ? 'Carregando...' : 'Entrar'}</Button>

      <SignUpTitle>Não tem conta? <NavigateSignUpText href='http://127.0.0.1:5173/signup'>Faça já a sua</NavigateSignUpText></SignUpTitle>
      <ToastContainer />
    </FormContainer>
  )
}