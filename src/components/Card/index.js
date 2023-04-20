import React from 'react'
import "./style.css"

export const Card = ({title, img, preco}) => {
  return (
    <div className='card'>
      <img src={`./img/${img}.svg`} alt={"Imagem do produto " + title} loading="lazy" />
      <p>{title}</p>
      <span><strong>R${preco}</strong></span>
      
    </div>
  )
}
