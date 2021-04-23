import Message from 'components/Message'
import React, { useState } from 'react'
import { LoginUser } from 'services/login'
import { useLocation } from 'wouter'

import logo from 'assets/img/logo.svg'
import './index.scss'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [, setLocation] = useLocation()

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault()

    const credentials = {
      username,
      password
    }

    LoginUser({ credentials })
      .then(user => {
        const { token } = user
        console.log(token)
        if (typeof token === "undefined") setMessage(user.error)
        else {
          localStorage.setItem('token', token)
          setMessage('')
          setLocation('/')
        }

      })
  }

  return (
    <form className="login-form" onSubmit={handleSubmitLogin}>
      <header className="login-form__header">
        <img className="login-form__logo" src={logo} alt="logo" />
        <h3>Iniciar sesion</h3>
      </header>
      <input
        type="text"
        className="login-form__input"
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
      />
      <input
        type="password"
        className="login-form__input"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <button className="login-form__button">Iniciar sesion</button>
      {
        message.length ? <Message message={"Usuario o contrasegna incorrecta"} type={"error"} /> : null
      }
    </form>
  )
}

export default Login