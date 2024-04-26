import React from 'react'
import "./Cards.css"
export default function Cards({icon, title, description}) {
  return (
    <div className='cards'>
      <img src={icon} className='cardsimg' alt='erreur' />
      <h3 className='title' > {title}</h3>
      <p className='para' >{description}</p>
    </div>
  )
}
