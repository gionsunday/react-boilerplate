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

import React from "react"
import { useState, useEffect, useRef } from "react";
import axios from "axios"

function Counter() {
    let initialValue = 0
    const [number, setNumber] = useState(initialValue)
    const [userArray, setUserArray] = useState([])
    const [loginState, setLoginState] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const [myTime, setmyTime] = useState(0)

    const usernameRef = useRef()


    useEffect(() => {

        const myTimer = setInterval(() => {
            setmyTime(myTime + 1)
        }, 1000)

        // return () => {
        //     clearInterval(myTimer)
        // }

    }, [myTime])


    useEffect(() => {

        usernameRef.current.focus()

        const fetchUser = async () => {

            try {

                const data = await axios.get("https://jsonplaceholder.typicode.com/users")


                if (searchValue === "") {
                    setUserArray(data.data)
                }
                else {

                    const filterUsers = userArray.filter(user =>
                        user.name.toLowerCase().includes(searchValue))
                    setUserArray(filterUsers)
                }

            } catch (error) {
                console.log(error)
            }

        }
        fetchUser()
    }, [searchValue])



    // useEffect(() => {

    //     if (searchValue === "") {
    //         setUserArray(userArray)
    //     }
    //     else {

    //         const filterUsers = userArray.filter(user =>
    //             user.name.toLowerCase().includes(searchValue))
    //         setUserArray(filterUsers)
    //     }


    // }, [searchValue])




    const increment = () => {
        setNumber(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setNumber(prevCount => prevCount - 1);
    };
    // console.log(userArray)
    return (
        <div className="teamDiv">
            <h1>{myTime}</h1>
            <button></button>


            
            <input ref={usernameRef} type="text" />



            <p>Count: {number}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" placeholder="enter search value" value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />

            {
                userArray.map((user, index) => {
                    // console.log(user)
                    if (user.name === "Kurtis Weissnat") {
                        return (

                            <p key={index}>This user exist in the database</p>
                        )
                    }
                    return (

                        <p key={index}>{user.name}</p>
                    )
                })
            }


        </div>
    );
}



//   import { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const decrement = () => {
//     setCount(prevCount => prevCount - 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }


export default Counter