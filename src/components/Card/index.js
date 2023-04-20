import React from 'react'
import "./style.css"

export const Card = ({title, img, preco, link}) => {
  return (
    <div className='card'>
      <img src={`./${img}`} alt={"Imagem do produto " + title} loading="lazy" />
      <p>{title}</p>
      {/* <span><strong></strong></span> */}
      {/* <a target="_blank" rel="noreferrer" href='https://donate.stripe.com/test_eVa0336zTbI561W3ce'>R${preco}</a> */}
      <a target="_blank" rel="noreferrer" href={link}>R${preco}</a>
      
    </div>
  )
}
