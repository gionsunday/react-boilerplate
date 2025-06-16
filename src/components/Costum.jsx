import React from 'react'

 const Costum = (props) => {
    console.log(props)
  return (
    
    <button onClick={props.handleClick}>
       {props.title}
    </button>
  )
}
export default React.memo(Costum)

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
