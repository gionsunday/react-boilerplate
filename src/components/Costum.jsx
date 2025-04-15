import React from 'react'

export const Costum = (props) => {
    console.log(props)
    const {title, handleClick} = props

  return (
    
    <button onClick={handleClick}>
       {title}
    </button>
  )
}
