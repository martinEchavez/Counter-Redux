import React from 'react'

export const Counter = ({ counter, increment, decrement }) => {
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}