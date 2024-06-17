import React from 'react'
import data from '../assets/MOCK_DATA.json'
import Display from '../components/Display'

const Home = ({cart, setCart}) => {
  return (
    <div>
        {data.map((d) => (
            <Display data={d} key={d.id} cart={cart} setCart={setCart} />
        ))}
    </div>
  )
}

export default Home