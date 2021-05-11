import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  // set the state
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await fetch('https://api.github.com/users')
    const users = await res.json()
    setUsers(users)
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt="login" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseEffectFetchData
