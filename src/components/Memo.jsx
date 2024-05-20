import React, { useEffect, useMemo, useState } from 'react'

const Memo = () => {

    const [input, setInput] = useState(0)
    const [dark, setDark] = useState(false)

    const themeStyles = useMemo(() => {
        return {
            padding: '20px',
            color: dark ? 'white' : 'black',
            backgroundColor: dark ? 'black' : 'white'
        }
    }, [dark])

    const doubleNumber = useMemo(() => {
        return double(input)
    }, [input])

    function double(num) {
        for (let i = 0; i < 100000000000; i++) {
            return num * 2
        }
    }

    useEffect(() => {
        console.log('theme chnaging');
    }, [dark])

    return (
        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} placeholder={input} />
            <button onClick={() => setDark(!dark)} >Change Theme</button>
            <p style={themeStyles}>{doubleNumber} </p>
        </div>
    )
}

export default Memo