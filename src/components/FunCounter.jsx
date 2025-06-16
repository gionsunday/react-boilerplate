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