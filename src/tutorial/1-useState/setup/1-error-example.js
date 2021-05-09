import React from 'react'
import { useState } from 'react'

const ErrorExample = () => {
  const [title, setTitle] = useState('random title')
  const changeTitle = () => {
    setTitle('Using use state! BOO')
  }
  return (
    <>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={changeTitle}>
        {' '}
        Change Title
      </button>
    </>
  )
}

export default ErrorExample
