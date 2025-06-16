import React from 'react'
import { useReducer } from 'react'

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { text: action.text, completed: false }]
        case "TOOGLE_TODO":
            return state.map((todo, index) => 
                index === action.index ? { ...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export const ReducerTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [])

    const handleAddTodo = (inputFieldValue) => {
        dispatch({ type: "ADD_TODO", text:inputFieldValue })
    }

    const handleToogleTodo = (index) => {
        dispatch({ type: "TOOGLE_TODO", index:index })
    }

    
    return (
        <div>
            <input type='text' onKeyDown={(e) => e.key === "Enter" && handleAddTodo(e.target.value)} />

            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            <span style={{ textDecoration: todo.completed ? "line-through" : 'none' }}>
                                {todo.text}
                            </span>
                            <button onClick={() => handleToogleTodo(index)} >Toogle</button>
                        </li>
                    ))}
            </ul>

        </div>
    )
}
