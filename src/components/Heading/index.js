import React from 'react'
import "./style.css"

export const Heading = ({title, text, img}) => {
  return (
    <div className='heading'>
      <div className='texts' align="center">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}
