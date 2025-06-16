import React from 'react'
import { useState, useRef, useEffect } from 'react'



export const Timer = () => {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(preTimer => preTimer + 1)
        }, 1000)

        return() =>{
            clearInterval(intervalRef.current)
        }
    }, [])



    return (


        <div>

            <h1>Timer - {timer}</h1>
            <button onClick={()=> clearInterval(intervalRef.current)}>clear timer</button>

        </div>
    )
}
