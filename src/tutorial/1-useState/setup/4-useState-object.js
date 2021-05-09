import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'leni',
    age: 31,
    message: 'I am learning useState',
  })
  console.log(person)
  const changeMessage = () => {
    setPerson({ ...person, message: 'Hi change the message' })
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  )
}

export default UseStateObject
