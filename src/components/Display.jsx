import React from "react";

const Display = ({ data, cart, setCart }) => {
    const container = {
        margin: "10px",
        padding: "10px",
        display: "inline-block",
        width: "200px",
        border: "1px solid #888",
    };

    function add() {
        setCart([...cart, data])
    }
    function remove() {
        setCart(cart.filter(item => item.id !== data.id));
    }

    return (
        <div style={container}>
            <h3>{data.name}</h3>
            <p>{data.brand}</p>
            <p>{data.year}</p>
            <p>{data.price}</p>
            {cart.includes(data) ? (
                <button onClick={remove} style={{ backgroundColor: "red", color: 'white' }}>
                    REMOVE
                </button>
            ) : (
                <button onClick={add}>ADD</button>
            )}
        </div>
    );
};

export default Display;
