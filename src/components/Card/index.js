import React from 'react'
import "./style.css"

export const Card = ({title, img, preco}) => {
  return (
    <div className='card'>
      <img src={`./img/${img}.svg`} alt={"Imagem do produto " + title} loading="lazy" />
      <p>{title}</p>
      {/* <span><strong></strong></span> */}
      {/* <a target="_blank" rel="noreferrer" href='https://donate.stripe.com/test_eVa0336zTbI561W3ce'>R${preco}</a> */}
      <a target="_blank" rel="noreferrer" href='https://pag.ae/7ZjDDm1jq'>R${preco}</a>
      
    </div>
  )
}
