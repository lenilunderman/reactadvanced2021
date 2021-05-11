import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [counter, setCounter] = useState(0)
  const test = 'test'
  useEffect(() => {
    console.log('use effect call')
    if (counter >= 1) {
      document.title = `Use effect number ${counter}`
    }
  }, []) // optional, in case u need to run multiple times

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Using UseState and UseEffect</h1>
      <h2>Counter is at: {counter}</h2>
      <button className="btn" onClick={handleClick}>
        {' '}
        Increment me{' '}
      </button>
    </>
  )
}

export default UseEffectBasics
