import React from 'react'
import "./style.css"

export const Navbar = ({text}) => {
  return (
    <nav>
      <h1>{text}</h1>
      <img className='img-logo' src='./icon.png' alt="logo" />
    </nav>
  )
}
