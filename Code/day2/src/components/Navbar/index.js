import React from 'react'
import './style.css'
import { styles } from './styles2'

const Navbar = () => {
  const users = { name: "Srinu", age: "27", city: "Hydersbad" }
  // const { name, age, st } = { ...users } // spread
  const { name, ...others } = {...users} // rest
  console.log(users)
  console.log(name, others)
  return (
    <div className="navbar">
      <div className='brand'>Our App</div>
      <div style={{ color: "yellow" }}>Home</div>
      <div style={{ ...styles.home, ...styles.clr }}>Home 2</div>
    </div>
  )
}

export default Navbar