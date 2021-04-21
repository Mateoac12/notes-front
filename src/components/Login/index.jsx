import Message from 'components/Message'
import React, { useState } from 'react'
import { LoginUser } from 'services/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

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
        typeof token !== "undefined"
          ? localStorage.setItem('token', token)
          : setMessage(user.error)
      })
  }

  if (message.length) {
    return (
      <Message message={message} />
    )
  }

  return (
    <form onSubmit={handleSubmitLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChangeUsername}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <button>Iniciar sesion</button>
    </form>
  )
}

export default Login