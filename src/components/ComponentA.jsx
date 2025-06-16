import React from 'react'
import { ComponentB } from './ComponentB'
import { useState, useEffect } from 'react'


export const ComponentA = () => {

  const [count, setCount] = useState([])
  const [effectTrigger, setCountEffectTrigger] = useState("")


  useEffect(() => {

    setCount([1, 2, 3, 4, 5])
    console.log("useEffect called")
  }, [effectTrigger])



  return (
    <div>
      <input type="text" onChange={(e) => { setCountEffectTrigger(e.target.value) }} />
      <ul>
        {
          count.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>




    </div>
  )
}
