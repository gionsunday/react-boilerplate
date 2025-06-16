import React from 'react'
import { useContext } from 'react'
import { userNameContext } from '../App'


export const ComponentC = () => {
    const { userName } = useContext(userNameContext)

  return (
    <div>
        ComponentC
       {userName}
    </div>
  )
}
