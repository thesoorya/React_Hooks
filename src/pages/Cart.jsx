import React, { useState, useEffect } from 'react';

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total when the cart changes
    const newTotal = cart.reduce((acc, curr) => {
      return acc + Number(curr.price);
    }, 0);
    setTotal(newTotal);
  }, [cart]);

  // Define the styles
  const container = {
    margin: '10px',
    padding: '10px',
    display: 'inline-block',
    width: '200px',
    border: '1px solid #888',
  };

  return (
    <>
      <h1>Total: {total}</h1>
      {cart.map((item) => (
        <div style={container} key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.brand}</p>
          <p>{item.year}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
};

export default Cart;
