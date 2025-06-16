import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ArrayMapper({title, persons}) {

    const mapperStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgb(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return (
        <>
        <div>
            {title}

            {persons.map((person,index)=> (<p key={person.id}>{person.name}</p>))}
        </div>
        </>
    )
}
