import React from 'react'
import { useState } from 'react';
import { Costum } from './Costum';

export const FunCounter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
         <div className="App">
         <header className="App-header">
           <div>Functional Component</div>
           <p>Your count is {counter}</p>

           <button
           onClick={()=> setCounter(counter + 1)}
           >
            Count</button>
            <button
           onClick={()=> setCounter(counter -1 )}
           >
            Count -1 </button>

            <Costum title="In Funtion" handleClick={() => alert("I'm in the functional Component")} />
           </header>
           </div>
        </>
   

      );
}
