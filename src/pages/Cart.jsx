import React from 'react'

const Cart = () => {
    
    const container = {
        margin: '10px',
        padding: '10px',
        display: 'inline-block',
        width: '200px',
        border: '1px solid #888'
    }

  return (
    <div style={container}>
        <h3>Name</h3>
        <p>Brand</p>
        <p>Year</p>
        <p>Price</p>
    </div>
  )
}

export default Cart