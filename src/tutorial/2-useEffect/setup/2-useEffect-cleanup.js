import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  // function to check the size using useEffect
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    // return () => {
    //   console.log('clean up')
    //   window.removeEventListener('resize', checkSize)
    // }
    console.log('test')
  }, [])

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX </h2>
    </>
  )
}

export default UseEffectCleanup
