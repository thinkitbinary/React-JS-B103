import React from 'react'
import './style.css'
import { styles } from './styles2'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const users = { name: "Srinu", age: "27", city: "Hydersbad" }
  // const { name, age, st } = { ...users } // spread
  const { name, ...others } = { ...users } // rest
  console.log(users)
  console.log(name, others)
  return (
    <div className="navbar">
      <div className='brand'>Our App</div>
      <div style={{ ...styles.home, ...styles.clr }}>
        <Link to="/">Home</Link>
      </div>
      <div style={{ ...styles.home, ...styles.clr }}>
        <Link to="/products">Products</Link>
      </div>
    </div>
  )
}

export default Navbar