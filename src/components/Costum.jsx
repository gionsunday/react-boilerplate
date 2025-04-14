import React from 'react'

export const Costum = (props) => {
    console.log(props)
  return (
    
    <button onClick={props.handleClick}>
       {props.title}
    </button>
  )
}
