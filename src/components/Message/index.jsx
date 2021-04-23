import React from 'react'

import './index.scss'

const Message = ({ message, type }) => {
  return (
    <h1 className={`message message__${type}`}>{message}</h1>
  )
}

export default Message