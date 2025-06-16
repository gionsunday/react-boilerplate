import React, { useContext } from 'react'
// import { FunCounter } from '../components/FunCounter'
import UserName from '../components/UserName'
import { Link } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { ReducerCounter } from '../components/ReducerCounter';
import { ReducerTodo } from '../components/ReducerTodo';

export const ConstantValueComtext = React.createContext()

export default function Home() {


  return (


    <ConstantValueComtext.Provider value="The vale is 100">
      <div className="bg-white">
        <ReducerTodo />
        <ReducerCounter />
        <Timer />
        {/* <FunCounter /> */}

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <h1 className='text-white'>Welcome Home</h1>
          <UserName />
          {/* <FunCounter /> */}

        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </div>
    </ConstantValueComtext.Provider>
  )
}
