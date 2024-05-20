import React, { useState } from 'react'

const State = () => {

    const [count, setCount] = useState(0)
    const [obj, setObj] = useState({name: 'soorya', age: 20})

    function countDecrement() {
        setCount(prevCount => prevCount - 1)
    }
    function countIncrement() {
        setCount(prevCount => prevCount + 1)
        return setObj(prevObj => ({...prevObj, age: obj.age + 1, name: 'name'}))
    }

    return (
        <div>
            <button onClick={countDecrement}>-</button>
            <span>{count} </span>
            <span>{obj.age} </span>
            <span>{obj.name} </span>
            <button onClick={countIncrement}>+</button>
        </div>
    )
}

export default State