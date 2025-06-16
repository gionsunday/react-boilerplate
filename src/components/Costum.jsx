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
