import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [type, setType] = useState('posts')
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    return (
        <div>
            <button onClick={() => setType('posts')}>posts</button>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('comments')}>comments</button>
            <h1>{type} </h1>
            {data.map((item, i) => (
                <pre key={i}>
                    {JSON.stringify(item)}
                </pre>
            ))}
        </div>
    )
}

export default Effect