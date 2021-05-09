import React from 'react'
import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    // filter the array with all the items that do not have the matching id
    let newPeople = people.filter((person) => person.id !== id)
    console.log(newPeople)
    setPeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        // destrocting
        const { id, name } = person
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}> Remove me</button>
          </div>
        )
      })}
      <button className="btn" onClick={() => setPeople([])}>
        {' '}
        Delete all
      </button>
    </>
  )
}

export default UseStateArray
