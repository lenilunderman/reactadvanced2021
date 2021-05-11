import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  // grab the data
  const getUser = async () => {
    const res = await fetch(url)
    const users = await res.json()
    const { login } = users
    setUser(login)
    setIsLoading(false)
    console.log(users)
  }

  useEffect(() => {
    getUser()
  }, [])

  if (isloading) {
    return (
      <div>
        <h2> Loading...</h2>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h2> There is an error...</h2>
      </div>
    )
  }

  return (
    <div>
      <h2> {user} </h2>
    </div>
  )
}

export default MultipleReturns
