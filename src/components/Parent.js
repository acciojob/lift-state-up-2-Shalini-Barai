import React from 'react'

const Parent = ({child}) => {
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <h2>{child}</h2>
    </div>
  )
}

export default Parent
