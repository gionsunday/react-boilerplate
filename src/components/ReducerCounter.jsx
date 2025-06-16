import React from 'react'
import { useReducer } from 'react'


const ReducerFucntion = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
          return {count: 
              state.count * 20
          };
        case "DECREMENT":
          return{ count : state.count - 1 };
        case "RESET":
            return {count: state.count = 0};  

        default:
           return state     
    }
}

let initialState = { count: 0}

 
export const ReducerCounter = () => {

    const [state, dispatch] = useReducer(ReducerFucntion, initialState)

    return (
        <div>

           <p>ReducerCounter {state.count} </p> 
           
           <button onClick={() =>dispatch({type:"INCREMENT"})}>Increase</button>
           <button onClick={() =>dispatch({type:"DECREMENT"})}>Decrease</button>
           <button onClick={() =>dispatch({type:"RESET"})}>RESET</button>

        </div>
    )
}
