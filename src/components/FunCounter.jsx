import React from 'react'
import { useState } from 'react';
import { Costum } from './Costum';
import ArrayMapper from './ArrayMapper';

export const FunCounter = () => {

  const persons = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer"
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        occupation: "Marketing Manager"
    },
    {
        id: 3,
        name: "Bob Johnson",
        age: 35,
        occupation: "Sales Representative"
    },
    {
        id: 4,
        name: "Alice Brown",
        age: 25,
        occupation: "Graphic Designer"
    },
    {
        id: 5,
        name: "Mike Davis",
        age: 40,
        occupation: "Product Manager"
    }
];

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

            <Costum 
            title="In Funtion"
            handleClick={() => alert("I'm in the fnctionual Component")} 
            
             />
             <ArrayMapper title="This is an array wrapper component" persons={persons} />
           </header>
           </div>
        </>
   

      );
}
