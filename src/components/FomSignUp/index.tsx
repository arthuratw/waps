import { useAuth } from '../../context/useAuth'
import { FormContainer, Input, Button, Title, InputArea, NavigateLoginText, LoginTitle } from './styles'
import { EnvelopeSimple, Lock } from 'phosphor-react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';




export function FormSignUp() {
  const auth = useAuth();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(){
    try {
      const schema = Yup.object().shape({

        email: Yup.string().email("Email inválido").required("Informe um email"),
        password: Yup.string().min(6, 'A senha deve possuir entre 6 e 20 caracteres').max(20, 'A senha deve possuir entre 6 e 20 caracteres').required(),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas são diferentes').required()
      })

      schema.validate({ email, password, confirmPassword })

      await auth.singUp(name, email, password).then(() => {
        navigate("/home")
      }).catch(() => {
        toast.error("Email ou senha invalido", {
          position: toast.POSITION.TOP_CENTER
        })
      })

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        alert(error.message)
      }
    }
  }
  return (

    <FormContainer>
      <Title>Cadastro</Title>
      <InputArea>
        <EnvelopeSimple size={24} color='#B9BBBE' />
        <Input
          type='text'
          placeholder='Nome'
          onChange={e => setName(e.target.value)}

        />
      </InputArea>

      <InputArea>
        <EnvelopeSimple size={24} color='#B9BBBE' />
        <Input
          type='text'
          placeholder='E-mail'
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

      <InputArea>
        <Lock size={24} color='#B9BBBE' />
        <Input
          type="password"
          placeholder='Repita a senha'
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </InputArea>

      <Button onClick={() => handleSubmit()}>{auth.loadingAuth ? 'Carregando...' : 'Cadastrar'}</Button>

      <LoginTitle>Já tem conta? <NavigateLoginText href='http://127.0.0.1:5173/'>Click aqui</NavigateLoginText></LoginTitle>
    </FormContainer>
  )
}