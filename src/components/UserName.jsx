
import React, { useReducer, useRef } from 'react'


const initialName = {
    firstName: "",
    lastName: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FIRSTNAME":
            return { ...state, firstName: action.value }
        case "SET_LASTNAME":
            return { ...state, lastName: action.value }

        default:
            return state
    }
}
function UserName() {
    const [count, dispatch] = useReducer(reducer, initialName)
    
    return (
        <div>
            UserName
            <div>
                <input type="text" value={count.firstName}
                    onChange={(e) => dispatch({ type: "SET_FIRSTNAME", value: e.target.value })} />
            </div>
            <div>
                <input type="text" value={count.lastName}
                    onChange={(e) => { dispatch({ type: "SET_LASTNAME", value: e.target.value }) }} />
            </div>
            <p>{count.firstName}, {count.lastName}</p>
        </div>
    )
}

export default React.memo(UserName)